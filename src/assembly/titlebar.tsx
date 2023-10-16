import { appWindow, WebviewWindow } from "@tauri-apps/api/window";
import { IoClose, IoRemove, IoStopOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const TitleBar = () => {
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
      className="flex absolute flex-row-reverse w-full p-2 space-x-2 z-50"
    >
      <IconContext.Provider
        value={{ className: "text-red", size: "2em" }}
      >
        <div onClick={() => closeWindows()}>
          <IoClose />
        </div>
        <div onClick={() => appWindow.minimize()}>
          <IoRemove />
        </div>
      </IconContext.Provider>
      
    </div>
  );
};
export default TitleBar;
