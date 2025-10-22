import cover_img_default from "../../imgs/cover-img-default.jpg"

function Estacio(){
    return(
        <div className="flex flex-col w-screen h-screen bg-orange-200 items-center">
            <div className="flex flex-row w-full h-[650px] items-center justify-center bg-blue-800">
                <div className="flex flex-row xl:w-7xl w-full h-full bg-blue-900 justify-between items-end">
                    <div className="flex flex-col w-[800px] h-[80%] bg-blue-300 z-0">
                        <div className="flex flex-col w-full h-[25px] bg-blue-200"></div>
                    </div>
                    <div className="flex flex-col w-[630px] h-[80%] border-none rounded-tl-[200px] z-1 absolute opacity-90">
                        <img src={cover_img_default} alt="" className="w-full h-full border-none rounded-tl-[200px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estacio;