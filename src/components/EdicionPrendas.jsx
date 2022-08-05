import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from "axios";

const EdicionPrendas = () => {
    const { id } = useParams();
    const [prendas, setPrendas] = useState([]);

    useEffect(() => {
      Axios.get(`http://localhost:8090/tienda/api/prendas/${id}`)
        .then(res => setPrendas(res.data));
      //  . then (res => setPrendas (console.log(res.data.content)) );
    }, [])
  
    return (
        <div>
            <h1>Edicion de Predas</h1>

            <p>ID</p> <br></br>
            <input value={id} type="text" />

            <p>Nombre</p>
            <input value={prendas.descripcion} type="text" />

            <p>Precio Base</p>
            <input value={prendas.precioBase} type="text" />
        </div>
    );
}

export default EdicionPrendas