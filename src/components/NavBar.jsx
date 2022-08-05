import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <Link to="prendas">Prendas</Link> {" | "}
            <Link to="clientes">Clientes</Link> {" | "}
            <Link to="ventas">Ventas</Link>
        </div>
    );
}

export default NavBar