import { useState } from "react";
import "../css/EditAgregarPrenda.css";
import "../App.css";
import Paper from "@mui/material/Paper";
import {
  FormControl,
  InputLabel,
  Button,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

import Axios from "axios";
import swal from "sweetalert";

const VentaTarjeta = ({ clienteslist, negocioslist }) => {
  const [clienteId, setClienteId] = useState("");
  const [cantidadCuotas, setCantidadCuotas] = useState("");
  const [negocioId, setNegocioId] = useState("");

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;

  function agregarVentaTarjeta() {
    swal("Desea procesar la Venta de Tarjeta? ", {
      buttons: {
        cancel: "Cancelar",
        agregarOtra: "Agregar y Continuar",
        agregarContinuar: "Agregar y Volver a Ventas",
      },
      icon: "info",
    }).then((value) => {
      switch (value) {
        case "cancel":
          break;

        case "agregarOtra":
          Axios.post(`http://localhost:8090/tienda/api/ventas/tarjeta/`, {
            clienteId,
            negocioId,
            cantidadCuotas
            
          })
            .then(function () {
              swal("La venta de tarjeta fue procesada con exito.", {
                icon: "success",
              }).then(() => {
                window.location.href = window.location.href;
              });
            })
            .catch(function () {
              swal("Ocurrio un error.", { icon: "error" });
              // console.log("Cliente: " + clienteId + " Cuotas: " + cantidadCuotas + " Negocio: " + negocioId);
            });

          break;

        case "agregarContinuar":
          Axios.post(`http://localhost:8090/tienda/api/ventas/tarjeta/`, {
            clienteId,
            negocioId,
            cantidadCuotas

          })
            .then(function () {
              swal("La venta de tarjeta fue procesada con exito.", {
                icon: "success",
              }).then(() => {
                window.location.href = "/ventas";
              });
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
      <Paper elevation={1} container justify="center" id="Carta">
        <form>
          <br></br>

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }} method="post">
            <InputLabel>Cliente</InputLabel>
            <Select
              required="true"
              autoWidth
              label="Cliente"
              onChange={(e) => setClienteId(e.target.value)}
            >
              {clienteslist.map((clienteslist) => {
                return (
                  <MenuItem value={clienteslist.id} key={clienteslist.id}>
                    {clienteslist.nombre}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }}>
            <TextField disabled id="outlined-disabled" label={date} />
          </FormControl>

          {/* <FormControl id="inputStyleJiji" method="post">
            <TextField
              type="number"
              required="true"
              label="Cantidad De Cuotas"
              variant="outlined"
              placeholder="Cantidad De Cuotas"
             onChange={(e) => setCantidadCuotas(e.target.value)}
            />
          </FormControl> */}

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Cuotas</InputLabel>
            <Select
              value={cantidadCuotas}
              label="Cuotas"
              onChange={(e) => setCantidadCuotas(e.target.value)}
            >
              <MenuItem value={1}>Una</MenuItem>
              <MenuItem value={2}>Dos</MenuItem>
              <MenuItem value={3}>Tres</MenuItem>
            </Select>
          </FormControl>



          <br></br>
          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }} method="post">
            <InputLabel>Negocio</InputLabel>
            <Select
              required="true"
              autoWidth
              label="Negocio"
              onChange={(e) => setNegocioId(e.target.value)}
            >
              {negocioslist.map((negocioslist) => {
                return (
                  <MenuItem key={negocioslist.id} value={negocioslist.id} >
                    {negocioslist.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </form>
        <Button
          style={{ padding: 20 }}
          type="submit"
          onClick={() => agregarVentaTarjeta()}
        >
          Agregar
        </Button>
      </Paper>
    </>
  );
};

export default VentaTarjeta;
