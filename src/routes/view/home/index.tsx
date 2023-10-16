import { useState } from "react";
import NavBars from "../../../assembly/navbars";
import Content from "../../../assembly/content";
const Home = () => {
    return (
        <div className=" flex flex-col w-screen h-screen overflow-hidden">
            <NavBars />
            <Content />
        </div>
    )
}
export default Home
