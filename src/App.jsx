import planet1 from "./assets/spr-planet.png"
import planetRed from "./assets/spr_red.png"

function App() {

  return (
    <div className="flex flex-row bg-gray-900 w-screen h-screen items-center justify-evenly">
      <div className="flex flex-row justify-between items-center w-[90%] h-[90%] p-1 flex-wrap">
        <div className="flex flex-col w-[100px] h-[100px] items-center justify-center hover:border-2 hover:border-dashed hover:cursor-pointer hover:border-white">
          <img src={planet1} alt="" className="w-18 h-18 hover:w-20 hover:h-20"/>
          <h1 className="text-white text-[10px]">planet 01</h1>
        </div>
        <div className="flex flex-col w-[100px] h-[100px] items-center justify-center hover:border-2 hover:border-dashed hover:cursor-pointer hover:border-white">
          <img src={planetRed} alt="" className="w-18 h-18 hover:w-20 hover:h-20"/>
          <h1 className="text-white text-[10px]">Planet Red</h1>
        </div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
        <div className="flex flex-row w-[100px] h-[100px] bg-amber-300"></div>
      </div>

    </div>
  )
}

export default App
