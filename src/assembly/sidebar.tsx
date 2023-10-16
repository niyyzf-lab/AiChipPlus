import waves from "/Img/login_left/waves.jpg"
const Sidebar = () => {
    return (
        <div className=" bg-black h-screen w-full">
            <div className="avatar">
                <div className="rounded-xl m-2 w-8  border-white border-2">
                    <img src={waves} />
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
