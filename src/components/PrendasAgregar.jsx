import { useState } from 'react';
import { Routes, Route, Redirect } from "react-router-dom";
import '../css/EditAgregarPrenda.css';
import '../App.css';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Input, Button } from '@mui/material';
import Axios from "axios";
//Alert Sweet
import swal from 'sweetalert';
//Alert Sweet
import Container from '@mui/material/Container';

const PrendasAgregar = () => {

  // const [prendas, setPrendas] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [precioBase, setprecioBase] = useState("");

  function agregarPrenda() {
    swal("Esta seguro que desea agregar la prenda?", {
      buttons: {
        cancel: "Cancelar",
        agregarOtra: "Agregar y Continuar",
        agregarContinuar: "Agregar y Volver a Prendas",
      },
      icon: "info"
    }
    )
      .then((value) => {
        switch (value) {

          case "cancel":
            break;

          case "agregarOtra":
            Axios.post(`http://localhost:8090/tienda/api/prendas/`, {
              descripcion,
              tipo,
              estado,
              precioBase
            })
              .then(function () {
                swal("Prenda agregada con exito.", { icon: "success" }).then(
                  () => {
                    window.location.href = window.location.href
                  }
                );
              })
              .catch(function () {
                swal("Ocurrio un error.", { icon: "error" });
              });

            break;

          case "agregarContinuar":
            Axios.post(`http://localhost:8090/tienda/api/prendas/`, {
              descripcion,
              tipo,
              estado,
              precioBase
            })
              .then(function () {

                swal("Prenda agregada con exito.", { icon: "success" }).then(
                  () => {
                    window.location.href = '/prendas';
                  }
                );
              })
              .catch(function () {
                swal("Ocurrio un error.", { icon: "error" });
              });

            break;

          default:

        }
      });
  }

  return (
    <>
      <Container maxWidth="sm">
        <h1>Agregar Prenda</h1>
      </Container>

      <Paper elevation={4}
        container justify="center"
        id="Carta"
      // style={{width:"100%", height:"100%"}}
      >
        <form>
          <FormControl method="post">
            <InputLabel htmlFor="descripcion">Descripcion</InputLabel>
            <Input id="descripcion" aria-describedby="my-helper-text" onChange={(e) => setDescripcion(e.target.value)} />
          </FormControl>
          {" "}
          <br></br>
          <br></br>
          <FormControl method="post">
            <InputLabel htmlFor="tipo">Tipo</InputLabel>
            <Input id="tipo" aria-describedby="my-helper-text" onChange={(e) => setTipo(e.target.value)} />
          </FormControl>
          {" "}
          <br></br>
          <br></br>
          <FormControl method="post">
            <InputLabel htmlFor="estado">Estado</InputLabel>
            <Input id="estado" aria-describedby="my-helper-text" onChange={(e) => setEstado(e.target.value)} />
          </FormControl>
          {" "}
          <br></br>
          <br></br>

          <FormControl method="post">
            <InputLabel htmlFor="precioBase">Precio Base</InputLabel>
            <Input id="precioBase" aria-describedby="my-helper-text" onChange={(e) => setprecioBase(e.target.value)} />
          </FormControl>
        </form>
        <Button style={{ padding: 20 }} type="submit" onClick={() => agregarPrenda()}>Agregar</Button>

      </Paper >
    </>
  );
}

export default PrendasAgregar