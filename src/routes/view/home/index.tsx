import NavBars from "../../../assembly/navbars";
import Content from "../../../assembly/content";
import Sidebar from "../../../assembly/sidebar";
const Home = () => {
  return (
    <div className=" flex flex-col w-screen h-screen overflow-hidden">
      <NavBars />
      <div className=" flex h-full">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};
export default Home;
