// 创建titlebar组件 h 为高度
const TitleBar_o: React.FC<{ h: number }> = ({ h }) => {
  return (
    <div
      data-tauri-drag-region
      className=" w-full absolute z-[2] "
      style={{ height: h }}
    ></div>
  );
};
export default TitleBar_o;
