import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//Toda la app se contiene en un BrowserRouter
import { BrowserRouter } from "react-router-dom";
// import Prendas from "./pages/Prendas";
// import Clientes from "./pages/Clientes";
// import Ventas from "./pages/Ventas";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
