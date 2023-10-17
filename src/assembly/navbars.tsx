import { IoClose, IoRemove } from "react-icons/io5";
import { IconContext } from "react-icons";
import { appWindow } from "@tauri-apps/api/window";
const NavBars = () => {
  return (
    <div
      data-tauri-drag-region
      className=" w-full bg-indigo-950  flex justify-between p-4 justify-items-center"
    >
      {/*左侧文字*/}
      <div className=" text-center text-white md:text-2xl ml-5 text-[0]">
        AI 智能芯片检测系统
      </div>
      {/*控制按钮组*/}
      <div className="flex">
        <IconContext.Provider value={{ className: "text-white", size: "2em" }}>
          <div onClick={() => appWindow.minimize()}>
            <IoRemove />
          </div>
          <div onClick={() => appWindow.close()}>
            <IoClose />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};
export default NavBars;
