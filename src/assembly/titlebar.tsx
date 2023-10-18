import { appWindow, WebviewWindow } from "@tauri-apps/api/window";
import { IoClose, IoRemove } from "react-icons/io5";
import { PiSunBold, PiMoonBold } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const TitleBar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  const closeWindows = () => {
    //获取所有窗体状态
    appWindow.close();
    const home_windows = WebviewWindow.getByLabel("home");
    if (home_windows) {
      home_windows.close();
    }
  };
  return (
    <div
      data-tauri-drag-region
      className="flex fixed flex-row-reverse w-full p-2 space-x-2"
    >
      <IconContext.Provider value={{ size: "1.7rem" }}>
        <div onClick={() => closeWindows()}>
          <IoClose />
        </div>
        <div onClick={() => appWindow.minimize()}>
          <IoRemove />
        </div>
        <label className="swap swap-rotate">
          <input type="checkbox" />

          <PiSunBold className="swap-on" data-set-theme="dark" />

          <PiMoonBold className="swap-off" data-set-theme="light" />
        </label>
      </IconContext.Provider>
    </div>
  );
};
export default TitleBar;
