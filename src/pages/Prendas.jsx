
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Axios from "axios";

import EdicionPrendas from "../components/EdicionPrendas";
import PrendasList from "../components/PrendasList";
//Reoutes me permite anidar las rutas
//Route me permite trabajar con las con las rutas

const Prendas = () => {
  const [prendas, setPrendas] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/prendas")
      .then(res => setPrendas(res.data.content));
    //  . then (res => setPrendas (console.log(res.data.content)) );
  }, [])

  //Implementaremos una rutra parametrica para llamar a los productos con y pasar instrucciones
  return (
    <main style={{ padding: "1rem 0" }}>
      <Routes>
        <Route index element={<PrendasList prendas={prendas} />} />
        <Route path=":id" element={<EdicionPrendas prendas={prendas} />} />
      </Routes>
    </main>
  );
}

export default Prendas