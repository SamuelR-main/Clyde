function Task(){
    return(
        <div className="flex flex-row bg-gray-900 w-screen h-screen items-center justify-evenly">
            <div className="flex flex-col bg-white xl:rounded-3xl xl:w-6xl xl:h-[800px] w-full h-full p-5 items-center justify-between">
                <div className="flex flex-row bg-white w-full h-[15%] items-center justify-around p-2 border-black border-b-6 ">
                    <div className="flex flex-col items-center justify-center w-[80px] h-[80px] bg-orange-500 rounded-full hover:border-black hover:border-4 hover:cursor-pointer"></div>
                    <div className="flex flex-row justify-center items-center">
                        <h1 className="text-7xl font-bold italic titulo">Planner Mensal</h1>
                    </div>
                    <div className="flex flex-row w-[400px] h-[100%] items-center justify-around">
                        <div className="flex flex-col justify-end bg-yellow-300 w-[200px] h-[65px] items-center rounded-2xl border-3 border-black">
                            <p>..........................</p>
                            <p>mês</p>
                        </div>
                        <div className="flex flex-col justify-end bg-yellow-300 w-[150px] h-[65px] items-center rounded-2xl border-3 border-black">
                            <p>..........................</p>
                            <p>ano</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-yellow-200 w-full h-[83%]"></div>
            </div>
        </div>
    )
}

export default Task