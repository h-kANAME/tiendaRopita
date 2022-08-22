import { useState } from 'react';
import '../css/EditAgregarPrenda.css';
import '../App.css';
import Paper from '@mui/material/Paper';
import { FormControl, Button, TextField } from '@mui/material';
import Axios from "axios";
import swal from 'sweetalert';

const NegocioAgregar = () => {

  const [name, setName] = useState("");

  function agregarNegocio() {
    swal("Esta seguro que desea agregar un Negocio?", {
      buttons: {
        cancel: "Cancelar",
        agregarOtra: "Agregar y Continuar",
        agregarContinuar: "Agregar y Volver a Negocios",
      },
      icon: "info"
    }
    )
      .then((value) => {
        switch (value) {

          case "cancel":
            break;

          case "agregarOtra":
            Axios.post(`http://localhost:8090/tienda/api/negocio/`, {
              name,
            })
              .then(function () {
                swal("Negocio agregado con exito.", { icon: "success" }).then(
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
            Axios.post(`http://localhost:8090/tienda/api/negocio/`, {
            name,
            })
              .then(function () {

                swal("Negocio agregado con exito.", { icon: "success" }).then(
                  () => {
                    window.location.href = '/negocio';
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
      >
        <form>
          <FormControl id="inputStyle" method="post">
            <TextField required="true" label="Nombre" variant="outlined" placeholder="Nombre del Negocio" onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <br></br>
        </form>
        <Button style={{ padding: 20 }} type="submit" onClick={() => agregarNegocio()}>Agregar</Button>
      </Paper >
    </>
  );
}

export default NegocioAgregar