import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Prendas from "./pages/Prendas";
import AgregarPrendas from "./pages/AgregarPrendas";
import Clientes from "./pages/Clientes";
import Ventas from "./pages/Ventas";
import GestionarItemVenta from './pages/GestionarItemVenta';
import Negocio from "./pages/Negocio";
import AgregarNegocio from "./pages/AgregarNegocio";

function App() {
  return (
    //La ruta de la raiz contiene el resto de las pages que voy a mostrar/navegar | Esto es posible por el componente Layout, que integra el comonente Outlet
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="prendas/*" element={<Prendas />} />
        <Route path="agregarPrendas" element={<AgregarPrendas />} />
        <Route path="clientes/*" element={<Clientes />} />
        <Route path="ventas/*" element={<Ventas />} />
        <Route path="gestionarItem" element={<GestionarItemVenta />} />
        <Route path="negocio/*" element={<Negocio />} />
        <Route path="agregarNegocio" element={<AgregarNegocio />} />
      </Route>
    </Routes>
  );
}

export default App