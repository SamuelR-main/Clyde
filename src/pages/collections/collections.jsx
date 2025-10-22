import { createElement } from "react"

function Collection(){
    return(
        <div className="flex flex-col bg-gray-900 w-screen h-screen items-center justify-evenly">
            <div className="flex flex-col bg-gray-800 xl:w-7xl w-full h-full">
                <div className="flex flex-row w-full h-[50px] bg-gray-700"></div>
                <div className="flex flex-row wrap p-10 justify-between">
                    <div className="min-w-[300px] min-h-[400px] max-w-[200px] max-h-[800px] bg-blue-400 p-5"></div>
                    <div className="min-w-[300px] min-h-[400px] max-w-[200px] max-h-[800px] bg-blue-400 p-5"></div>
                    <div className="min-w-[300px] min-h-[400px] max-w-[200px] max-h-[800px] bg-blue-400 p-5"></div>
                </div>
            </div>
        </div>
    )
}

export default Collection