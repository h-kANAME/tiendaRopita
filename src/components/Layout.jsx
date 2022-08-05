import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        //Outlet me permite llamar el resto de las pages sobre el Layout
        <div>
            <h1>Tienda Ropita</h1>
            <NavBar />
            <Outlet />
            
        </div>
    );
}

export default Layout