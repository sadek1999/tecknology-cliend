import { Outlet } from "react-router-dom";
import Naveber from "../sheare/Naveber";
import Footer from "../sheare/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
           <Naveber></Naveber> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;