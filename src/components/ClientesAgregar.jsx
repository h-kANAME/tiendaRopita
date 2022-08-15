import { useState } from 'react';
import '../css/EditAgregarPrenda.css';
import '../App.css';
import Paper from '@mui/material/Paper';
import { FormControl, Input, InputLabel, Button, Select, MenuItem, TextField } from '@mui/material';
import Axios from "axios";
//Alert Sweet
import swal from 'sweetalert';
//Alert Sweet

const ClientesAgregar = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
  

  function agregarPrenda() {
    swal("Esta seguro que desea crear este Cliente?", {
      buttons: {
        cancel: "Cancelar",
        agregarOtra: "Agregar y Continuar",
        agregarContinuar: "Agregar y Volver a Clientes",
      },
      icon: "info"
    }
    )
      .then((value) => {
        switch (value) {

          case "cancel":
            break;

          case "agregarOtra":
            Axios.post(`http://localhost:8090/tienda/api/clientes/`, {
              nombre,
              apellido
            })
              .then(function () {
                swal("Cliente creado con exito.", { icon: "success" }).then(
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
            Axios.post(`http://localhost:8090/tienda/api/clientes/`, {
              nombre,
              apellido
              
            })
              .then(function () {

                swal("Cliente creado con exito.", { icon: "success" }).then(
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
      <Paper elevation={1}
        container justify="center"
        id="Carta"
      // style={{width:"100%", height:"100%"}}
      >
        <form>

          <FormControl id="inputStyle" method="post">
            <TextField required="true" label="Nombre" variant="outlined" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
          </FormControl>
          <br></br>

          <FormControl id="inputStyleJiji" method="post">
            <TextField required="true" label="Apellido" variant="outlined" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
          </FormControl>
          <br></br>
        </form>
        <Button style={{ padding: 20 }} type="submit" onClick={() => agregarPrenda()}>Agregar</Button>

      </Paper >
    </>
  );
}

export default ClientesAgregar