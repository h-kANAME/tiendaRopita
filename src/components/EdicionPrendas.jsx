import '../css/EditPrendas.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from "axios";
import Paper from '@mui/material/Paper';

const EdicionPrendas = () => {
  const { id } = useParams();
  const [prendas, setPrendas] = useState([]);

  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [precioBase, setprecioBase] = useState("");

  useEffect(() => {
    Axios.get(`http://localhost:8090/tienda/api/prendas/${id}`)
      .then(res => setPrendas(res.data));
    //  . then (res => setPrendas (console.log(res.data.content)) );
  }, [])


      function editarPrenda(){
      Axios.put(`http://localhost:8090/tienda/api/prendas/${id}`, {
          descripcion,
          tipo,
          estado,
          precioBase
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  return (
    <Paper elevation={24}
      container justify="center"
      id="Carta"
    >
      <h1>Edicion de Predas</h1>

      <form method="put">
        <p>ID</p> <br></br>
        <input value={id} type="text" />

        <p>Nombre</p>
        <input placeholder={prendas.descripcion} type="text" name="descripcion" onChange={(e)=>setDescripcion(e.target.value)}/>

        <p>Tipo</p>
        <input placeholder={prendas.tipo} type="text" name="tipo" onChange={(e)=>setTipo(e.target.value)}/>

        <p>Estado</p>
        <input placeholder={prendas.estado} type="text" name="estado" onChange={(e)=>setEstado(e.target.value)}/>

        <p>Precio Base</p>
        <input  placeholder={prendas.precioBase} type="text" name="precioBase" onChange={(e)=>setprecioBase(e.target.value)}/>

        <br></br>

        <button type="submit" onClick={() => editarPrenda()}>Guardar</button>
      </form>

    </Paper>
  );
}

export default EdicionPrendas