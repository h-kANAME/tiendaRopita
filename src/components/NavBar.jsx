import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import '../App.css';
const NavBar = () => {
    return (
        <div>
            <Link to="prendas" style={{ textDecoration: "none" }}><Button variant="contained">Prendas</Button></Link> {" "}
            <Link to="clientes" style={{ textDecoration: "none" }}><Button variant="contained">Clientes</Button></Link> {" "}
            <Link to="ventas" style={{ textDecoration: "none" }}><Button variant="contained">Ventas</Button></Link> {" "}
            <Link to="negocio" style={{ textDecoration: "none" }}><Button variant="contained">Negocio</Button></Link> {" "}
            <hr></hr>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/prendas" style={{ textDecoration: "none" }}><Button variant="contained">Prendas</Button></Nav.Link> {" "}
                    <Nav.Link href="/clientes" style={{ textDecoration: "none" }}><Button variant="contained">Clientes</Button></Nav.Link> {" "}
                    <Nav.Link href="/ventas" style={{ textDecoration: "none" }}><Button variant="contained">Ventas</Button></Nav.Link> {" "}
                    <Nav.Link href="/negocio" style={{ textDecoration: "none" }}><Button variant="contained">Negocio</Button></Nav.Link> {" "}
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default NavBar