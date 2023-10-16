import { appWindow, WebviewWindow } from "@tauri-apps/api/window";
import { XMarkIcon,MinusSmallIcon } from "@heroicons/react/24/outline";
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
      <div onClick={() => closeWindows()}>
        <XMarkIcon className="w-6" />
      </div>
      <div onClick={() => appWindow.minimize()}>
        <MinusSmallIcon className="w-6" />
      </div>
    </div>
  );
};
export default TitleBar;
