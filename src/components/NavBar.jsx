import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import '../App.css';
const NavBar = () => {
    return (
        <div>
            <Link to="prendas"  style={{textDecoration: "none"}}><Button variant="contained"> Prendas</Button></Link> {" | "}
            <Link to="clientes"  style={{textDecoration: "none"}}><Button variant="contained"> Clientes</Button></Link> {" | "}
            <Link to="ventas"  style={{textDecoration: "none"}}>Ventas</Link>
        </div>
    );
}

export default NavBar