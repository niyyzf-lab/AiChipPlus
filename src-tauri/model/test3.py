#!/usr/bin/env python
# 后端

import asyncio
import json
import websockets
import cv2

import numpy as np
import os
import threading
import random
from websockets.exceptions import ConnectionClosedError

# cv2 open camera
cap = cv2.VideoCapture(0)


us = 0
user = None


async def chat(websocket: websockets.WebSocketClientProtocol):
    # send camera data
    global user
    global us
    us += 1
    if user is not None:
        await user.close()
    user = websocket
    try:
        while True:
            ret, frame = cap.read()
            if ret:
                frame = cv2.resize(frame, (640, 480))
                frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                frame = frame.tobytes()

                await websocket.send(frame)
            if random.random() < 0.01:
                print(us)
    except ConnectionClosedError as e:
        print(e)
        print("ConnectionClosedError")
        return


start_server = websockets.serve(chat, "127.0.0.1", 1234)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
