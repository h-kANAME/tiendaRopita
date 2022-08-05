// import logo from './logo.svg';
//import React from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Prendas from "./pages/Prendas";
import Clientes from "./pages/Clientes";
import Ventas from "./pages/Ventas";

function App() {
  return (
    //La ruta de la raiz contiene el resto de las pages que voy a mostrar/navegar | Esto es posible por el componente Layout, que integra el comonente Outlet
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="prendas/*" element={<Prendas />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="ventas" element={<Ventas  test={1+1}/>} /> 
        {/* Variable test es para probar sintaxis para pasar props */}
      </Route>
    </Routes>
  );
}

export default App