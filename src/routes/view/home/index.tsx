import NavBars from "../../../assembly/navbars";
import Content from "../../../assembly/content";
import TitleBar_o from "../../../assembly/titlebar_only";
const Home = () => {
    return (
        <div className=" flex flex-col w-screen h-screen overflow-hidden relative">
            
            <NavBars />
            <Content />
        </div>
    )
}
export default Home
