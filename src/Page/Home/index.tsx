/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 */

import { Button, Tab, TabList, Tooltip } from "@fluentui/react-components";
import { WebviewWindow, appWindow } from "@tauri-apps/api/window";
import { useState } from "react";
import {
  MdClose,
  MdCloseFullscreen,
  MdMinimize,
  MdOpenInFull,
} from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const setFullscreen = async () => {
    const window = WebviewWindow.getByLabel("aiChip");
    if (window) {
      setIsFullscreen(await window.isMaximized());
    }
  };
  return (
    <div className="flex flex-col w-screen h-screen ">
      <div
        data-tauri-drag-region
        onMouseLeave={setFullscreen}
        className="flex items-center w-screen h-10 p-10 shadow-md bg-slate-200/50"
      >
        <div className="flex items-center min-w-[48px]">
          <svg fill="none" height="48" viewBox="0 0 32 32" width="48">
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <h1 className="hidden text-xl font-bold select-none md:block">
            Ai Chip Pro Max
          </h1>
        </div>
        <TabList
          className="flex-1 p-10 "
          data-tauri-drag-region
          defaultSelectedValue="Home"
        >
          <Link to="/home/">
            <Tab value="Home">Home</Tab>
          </Link>
          <Link to="/home/about">
            <Tab value="Page2">About</Tab>
          </Link>
          <Tab value="Page3">Page3</Tab>
          <Tab value="Page4">Page4</Tab>
        </TabList>
        <div className="flex-initial">
          <Tooltip content="MinSize" relationship="label">
            <Button
              icon={<MdMinimize className="text-2xl " />}
              size="large"
              appearance="subtle"
              onClick={() => appWindow.minimize()}
            />
          </Tooltip>
          <Tooltip content="OpenInFull" relationship="label">
            {!isFullscreen ? (
              <Button
                icon={<MdOpenInFull className="text-2xl" />}
                size="large"
                appearance="subtle"
                onClick={() => appWindow.maximize()}
              />
            ) : (
              <Button
                icon={<MdCloseFullscreen className="text-2xl" />}
                size="large"
                appearance="subtle"
                onClick={() => appWindow.unmaximize()}
              />
            )}
          </Tooltip>
          <Tooltip content="Exit" relationship="label">
            <Button
              icon={<MdClose className="text-2xl hover:text-red-600" />}
              size="large"
              appearance="subtle"
              onClick={() => appWindow.close()}
            />
          </Tooltip>
        </div>
      </div>
      {/**子路由 */}
      <Outlet />
    </div>
  );
};
export default HomePage;
