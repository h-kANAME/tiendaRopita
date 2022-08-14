import { useState } from 'react';
import '../css/EditAgregarPrenda.css';
import '../App.css';
import Paper from '@mui/material/Paper';
import { FormControl, Input, InputLabel, Button, Select, MenuItem, TextField } from '@mui/material';
import Axios from "axios";
//Alert Sweet
import swal from 'sweetalert';
//Alert Sweet

const PrendasAgregar = () => {

  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [precioBase, setPrecioBase] = useState("");

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
      <Paper elevation={1}
        container justify="center"
        id="Carta"
      // style={{width:"100%", height:"100%"}}
      >
        <form>

          <FormControl id="inputStyle" method="post">
            <TextField required="true" label="Nombre" variant="outlined" placeholder="Nombre de la prenda" onChange={(e) => setDescripcion(e.target.value)} />
          </FormControl>
          <br></br>

          {/* <FormControl method="post">
            <InputLabel htmlFor="descripcion">Descripcion</InputLabel>
            <Input id="descripcion" aria-describedby="my-helper-text" onChange={(e) => setDescripcion(e.target.value)} />
          </FormControl>
          {" "}
          <br></br>
          <br></br> */}

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }}>
            <InputLabel>Tipo</InputLabel>
            <Select
              required="true"
              autoWidth
              label="Tipo"
              onChange={(e) => setTipo(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Pantalon">Pantalon</MenuItem>
              <MenuItem value="Saco">Saco</MenuItem>
            </Select>
          </FormControl>

          {/* <FormControl method="post">
            <InputLabel htmlFor="tipo">Tipo</InputLabel>
            <Input id="tipo" aria-describedby="my-helper-text" onChange={(e) => setTipo(e.target.value)} />
          </FormControl> */}
          {/* {" "}
          <br></br>

          <br></br> */}
          {/* <FormControl method="post">
            <InputLabel htmlFor="estado">Estado</InputLabel>
            <Input id="estado" aria-describedby="my-helper-text" onChange={(e) => setEstado(e.target.value)} />
          </FormControl>
          {" "}
          <br></br>
          <br></br> */}

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }}>
            <InputLabel>Estado</InputLabel>
            <Select
              required="true"
              autoWidth
              label="Estado"
              onChange={(e) => setEstado(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Nueva">Nueva</MenuItem>
            </Select>
          </FormControl>

          {/* <FormControl method="post">
            <InputLabel htmlFor="precioBase">Precio Base</InputLabel>
            <Input id="precioBase" aria-describedby="my-helper-text" onChange={(e) => setprecioBase(e.target.value)} />
          </FormControl> */}

          <FormControl id="inputStyleJiji" method="post">
            <TextField required="true" label="Precio Base" variant="outlined" placeholder="Precio base" onChange={(e) => setPrecioBase(e.target.value)} />
          </FormControl>

        </form>
        <Button style={{ padding: 20 }} type="submit" onClick={() => agregarPrenda()}>Agregar</Button>

      </Paper >
    </>
  );
}

export default PrendasAgregar