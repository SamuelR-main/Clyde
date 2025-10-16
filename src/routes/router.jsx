import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/home/App";
import Task from "../pages/task/task";
import Collection from "../pages/collections/collections";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/task" element={<Task />}></Route>
                <Route path="/collection" element={<Collection />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas