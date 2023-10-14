import { appWindow } from "@tauri-apps/api/window"

const TitleBar = () => {
    return(
        <div
        data-tauri-drag-region
        className="flex absolute flex-row-reverse w-full p-2 space-x-2 z-50"
      >
        <div onClick={() => appWindow.close()}>
          <img
            src="https://api.iconify.design/mdi:close.svg"
            alt="close"
            className="w-6"
          />
        </div>
        <div onClick={() => appWindow.minimize()}>
          <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
            className="w-6"
          />
        </div>
      </div>
    )
}
export default TitleBar