import { Outlet } from "react-router-dom";
import Naveber from "../sheare/Naveber";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
           <Naveber></Naveber> 
           <Outlet></Outlet>
        </div>
    );
};

export default Main;