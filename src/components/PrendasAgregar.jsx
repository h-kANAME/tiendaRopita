import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/EditAgregarPrenda.css';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Input, Button, FormHelperText } from '@mui/material';

import Axios from "axios";

const PrendasAgregar = () => {

  const [prendas, setPrendas] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [precioBase, setprecioBase] = useState("");

  useEffect(() => {
    Axios.post(`http://localhost:8090/tienda/api/prendas/`)
      .then(res => setPrendas(res.data));
  }, [])


  function agregarPrenda() {
    Axios.post(`http://localhost:8090/tienda/api/prendas/`, {
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
      <h1>Agregar Prenda</h1>

      <form method="post">
        <FormControl method="post">
          <InputLabel htmlFor="descripcion">Descripcion</InputLabel>
          <Input id="descripcion" aria-describedby="my-helper-text" onChange={(e) => setDescripcion(e.target.value)} />
        </FormControl>

        <FormControl method="post">
          <InputLabel htmlFor="tipo">Tipo</InputLabel>
          <Input id="tipo" aria-describedby="my-helper-text" onChange={(e) => setTipo(e.target.value)} />
        </FormControl>
        <br></br>
        <br></br>
        <FormControl method="post">
          <InputLabel htmlFor="estado">Estado</InputLabel>
          <Input id="estado" aria-describedby="my-helper-text" onChange={(e) => setEstado(e.target.value)} />
        </FormControl>

        <FormControl method="post">
          <InputLabel htmlFor="precioBase">Precio Base</InputLabel>
          <Input id="precioBase" aria-describedby="my-helper-text" onChange={(e) => setprecioBase(e.target.value)} />
        </FormControl>
        <br></br>
        <br></br>
        <Button type="submit" onClick={() => agregarPrenda()}>Agregar</Button>
        <br></br>
        <br></br>
      </form>

    </Paper >
  );
}

export default PrendasAgregar