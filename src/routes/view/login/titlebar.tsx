import { IconContext } from "react-icons";
import { FiX, FiMinus } from "react-icons/fi";
const TitleBar = () => {
  return (
    <div
      data-tauri-drag-region
      className="absolute z-50 w-screen flex flex-row-reverse p-2"
    >
      <IconContext.Provider
        value={{ style: { verticalAlign: "middle" }, size: "1.5rem" }}
      >
        <FiX />
        <FiMinus />
      </IconContext.Provider>
    </div>
  );
};

export default TitleBar;
