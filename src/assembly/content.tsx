import Canvas from "../components/canvas";
const Content = () => {
  return (
    <div className="w-full h-full bg-gray-200 rounded-md">
      <div className="grid grid-cols-3 grid-flow-col h-full gap-10 p-20">
        <div className="col-span-2 w-full rounded-xl">
          <Canvas />
        </div>
      </div>
    </div>
  );
};

export default Content;
