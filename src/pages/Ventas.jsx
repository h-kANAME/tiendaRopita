import { Routes, Route } from "react-router-dom";
import VentasList from "../components/VentasList";
import VentasGestionarItem from "../components/VentasGestionarItem";
import { useState, useEffect } from 'react';

import Axios from "axios";
const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/ventas/")
      .then(res => setVentas(res.data.content));
  }, [])
  return (
    <>
      <main>
        <Routes>
          <Route index element={<VentasList ventas={ventas} />} />
          <Route path=":id" element={<VentasGestionarItem ventas={ventas} />} />
          {/* <Route path="gestionarItem" element={<VentasGestionarItem ventas={ventas} />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default Ventas