import { Outlet } from "react-router-dom";
import logo from '../img/TR.png';
import NavBar from "./NavBar";
import '../App.css';
const Layout = () => {
    return (
        //Outlet me permite llamar el resto de las pages sobre el Layout
        <div>
            <img src={logo} height={200} id="logo"/>
            <h1>Tienda Ropita</h1>
            <NavBar />
            <Outlet />
            
        </div>
    );
}

export default Layout