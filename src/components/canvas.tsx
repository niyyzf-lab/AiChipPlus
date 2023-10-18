import { RefObject, useEffect, useRef, useState } from "react";
import { useBeforeUnload } from "react-router-dom";

const Canvas = () => {
  let cam: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
  const ctx: CanvasRenderingContext2D | null =
    cam.current?.getContext("2d") ?? null;
  let socket: WebSocket;
  const [isEnabled, setCameraEnabled] = useState(false);

  useEffect(() => {
    if (ctx) {
      socket = new WebSocket("ws://127.0.0.1:1234");
      socket.binaryType = "arraybuffer";
      socket.onmessage = (event) => {
        const arrayBuffer = event.data;
        const imageData = new Uint8Array(arrayBuffer);


        const image = new ImageData(640, 480);

        let index = 0;
        for (let i = 0; i < image.data.length; i += 4) {
          image.data[i] = imageData[index];
          image.data[i + 1] = imageData[index + 1];
          image.data[i + 2] = imageData[index + 2];
          image.data[i + 3] = 255; // Set alpha channel to opaque
          index += 3;
        }

        if (ctx) {
          // Clear the canvas
          ctx.clearRect(
            0,
            0,
            cam.current?.width ?? 0,
            cam.current?.height ?? 0
          );
          // Draw the image data on the canvas
          ctx.putImageData(image, 0, 0);
        } else {
          console.error("Invalid canvas context");
        }
      };
    }
  }, [cam.current]);
  useBeforeUnload((e) => {
    console.error("refresh");
  });
  const CameraStart = () => {
    setCameraEnabled(true);
  };
  const CameraStop = () => {
    setCameraEnabled(false);
  };
  const CameraReset = () => {
    // reset web socket
    // socket.close();
    // socket = new WebSocket("ws://127.0.0.1:1234");
  };
  return (
    <div>
      <canvas ref={cam} id="cam" width={"640px"} height={"480px"}></canvas>
      <div className=" flex flex-col">
        <div className="flex gap-6">
          <button className="btn" onClick={CameraStart}>
            Start
          </button>
          <button className="btn" onClick={CameraStop}>
            Stop
          </button>
          <button className="btn" onClick={CameraReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Canvas;
