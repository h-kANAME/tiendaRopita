import { Outlet } from "react-router-dom";
import logo from '../img/TR.png';
import NavBar from "./NavBar";
import Header from "./Header";
import Image from 'react-bootstrap/Image'
import '../App.css';
const Layout = () => {
    return (
        //Outlet me permite llamar el resto de las pages sobre el Layout
        <>
            <Header />
            <div className="container">
                <div className="text-center">
                    <div className="row">
                        <Image src={logo} id="logo" />
                        {/* <h1>Tienda Ropita</h1> */}
                        <NavBar />
                        <Outlet />
                        {/* <Equipo /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Layout