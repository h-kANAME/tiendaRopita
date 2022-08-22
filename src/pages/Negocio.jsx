import NegocioList from "../components/NegocioList";
import NegocioAgregar from "../components/NegocioAgregar";
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Axios from "axios";

const Negocio = () => {

  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/negocios/all")
      .then(res => setNegocios(res.data));
  }, [])

  return (
    <>
      <main>
        <Routes>
          <Route index element={<NegocioList negocios={negocios} />} />
          <Route path="agregarNegocio" element={<NegocioAgregar negocios={negocios} />} />
        </Routes>
      </main>
    </>
  );
}

export default Negocio