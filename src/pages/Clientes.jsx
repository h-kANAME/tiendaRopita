import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Axios from "axios";

import AgregarClientes from "../components/ClientesAgregar";
import EdicionClientes from "../components/EdicionClientes";
import ClientesList from "../components/ClientesList";
//Reoutes me permite anidar las rutas
//Route me permite trabajar con las con las rutas

const Clientes = () => {
const [clientes, setClientes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8090/tienda/api/clientes/all")
      .then(res => setClientes(res.data));
    //  . then (res => setPrendas (console.log(res.data.content)) );
  }, [])
  return (
    <main>
      <Routes>
        <Route index element={<ClientesList clientes={clientes} />} />
        <Route path=":id" element={<EdicionClientes clientes={clientes} />} />
        <Route path="agregarCliente" element={<AgregarClientes clientes={clientes} />} />
      </Routes>
    </main>
  );
}
export default Clientes