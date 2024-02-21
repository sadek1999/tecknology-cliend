import { Outlet } from "react-router-dom";
import Naveber from "../sheare/Naveber";


const Main = () => {
    return (
        <div>
           <Naveber></Naveber> 
           <Outlet></Outlet>
        </div>
    );
};

export default Main;