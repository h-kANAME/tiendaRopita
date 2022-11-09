import { Routes, Route } from "react-router-dom";
import VentasList from "../components/VentasList";
import VentaTarjeta from "../components/VentaTarjeta";
import VentaEfectivo from "../components/VentaEfectivo";
import VentasAgregarItem from "../components/VentasAgregarItem";
import VentasGestionarItem from "../components/VentasGestionarItem";
import VentasEdicionItem from "../components/VentasEdicion";
import { useState, useEffect } from 'react';

import Axios from "axios";
const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [clienteslist, setClienteslist] = useState([]);
  const [negociolist, setNegociolist] = useState([]);
  const [prendaslist, setPrendaslist] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/ventas/")
      .then(res => setVentas(res.data.content));
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/prendas")
      .then(res => setPrendaslist(res.data.content));
      //. then (res => setPrendas (console.log(res.data.content)) );
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/clientes/all")
     .then(res => setClienteslist(res.data));
    // . then (res => setClienteslist (console.log(res.data)) );
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/negocios/all")
       .then(res => setNegociolist(res.data));
 // .then (res => setNegociolist(console.log(res.data)) );
  }, [])
  return (
    <>
      <main>
        <Routes>
          <Route index element={<VentasList ventas={ventas} />} />
          <Route path="Gestionar/:id" element={<VentasGestionarItem ventas={ventas} />} />
          <Route path="Gestionar/:id/Agregar" element={<VentasAgregarItem ventas={ventas} prendaslist={prendaslist} /> } />
          <Route path="Gestionar/:id/Edicion/:iditem" element={<VentasEdicionItem ventas={ventas} prendaslist={prendaslist} /> } />
          <Route path="gestionarItem" element={<VentasGestionarItem ventas={ventas} />} />
          <Route path="ventaTarjeta" element={<VentaTarjeta ventas={ventas} clienteslist={clienteslist} negocioslist={negociolist}/>} />
          <Route path="ventaEfectivo" element={<VentaEfectivo ventas={ventas} clienteslist={clienteslist} negocioslist={negociolist}/>} />
        </Routes>
      </main>
    </>
  );
}
export default Ventas