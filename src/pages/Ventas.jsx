import { Routes, Route } from "react-router-dom";
import VentasList from "../components/VentasList";
import VentaTarjeta from "../components/VentaTarjeta";
import VentasAgregarItem from "../components/VentasAgregarItem";
import VentasGestionarItem from "../components/VentasGestionarItem";
import { useState, useEffect } from 'react';

import Axios from "axios";
const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [clienteslist, setClienteslist] = useState([]);
  const [negociolist, setNegociolist] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/ventas/")
      .then(res => setVentas(res.data.content));
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/clientes/all")
      .then(res => setClienteslist(res.data));
    //  . then (res => setPrendas (console.log(res.data.content)) );
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/negocios/all")
      // .then(res => setNegociolist(res.data.ventas));
      .then (res => setNegociolist(console.log(res.data.id)) );
  }, [])
  return (
    <>
      <main>
        <Routes>
          <Route index element={<VentasList ventas={ventas} />} />
          <Route path=":id" element={<VentasGestionarItem ventas={ventas} />} />
          <Route path="VentasAgregarItem" element={<VentasAgregarItem ventas={ventas} />} />
          <Route path="gestionarItem" element={<VentasGestionarItem ventas={ventas} />} />
          <Route path="ventaTarjeta" element={<VentaTarjeta ventas={ventas} clienteslist={clienteslist} negocioslist={negociolist}/>} />
        </Routes>
      </main>
    </>
  );
}

export default Ventas