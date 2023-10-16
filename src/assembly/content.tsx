const Content = () => {
    return (
        <div className="w-full h-screen p-20">
            <div className="grid grid-cols-3 grid-flow-col h-full gap-10">
                <div className="bg-black col-span-2 w-full rounded-xl">
                    <canvas className=" "></canvas>
                </div>
                <div className="s flex flex-col">
                    <div className="flex gap-6">
                        <button className="btn">Start</button>
                        <button className="btn">Stop</button>
                        <button className="btn">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;
