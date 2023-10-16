import NavBars from "../../../assembly/navbars";
import Content from "../../../assembly/content";
import TitleBar_o from "../../../assembly/titlebat_only";
const Home = () => {
    return (
        <div className=" flex flex-col w-screen h-screen overflow-hidden relative">
            <TitleBar_o h={65} />
            <NavBars />
            <Content />
        </div>
    )
}
export default Home
