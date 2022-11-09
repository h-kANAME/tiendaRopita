import { useState, useEffect } from "react";
import "../css/EditAgregarPrenda.css";
import "../App.css";
import Paper from "@mui/material/Paper";
import { FormControl, InputLabel, Button, Select, MenuItem, TextField } from "@mui/material";
import Axios from "axios";
import swal from "sweetalert";

const VentaTarjeta = ({ clienteslist, negocioslist }) => {
  const [clienteId, setClienteId] = useState("");
  const [negocioId, setNegocioId] = useState("");

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;

  function agregarEfectivoTarjeta() {
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
          Axios.post(`http://localhost:8090/tienda/api/ventas/efectivo`, {
            clienteId,
            negocioId
          })
            .then(function () {
              swal("La venta de EFectivo fue procesada con exito.", {
                icon: "success",
              }).then(() => {
                window.location.href = window.location.href;
              });
            })
            .catch(function () {
              swal("Ocurrio un error.", { icon: "error" });
            });

          break;

        case "agregarContinuar":
          Axios.post(`http://localhost:8090/tienda/api/ventas/efectivo`, {
            clienteId,
            negocioId,
          })
            .then(function () {
              swal("La venta de Efectivo fue procesada con exito.", {
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

          <FormControl id="selectStyle" sx={{ m: 2, minWidth: 300 }} method="post">
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
          onClick={() => agregarEfectivoTarjeta()}
        >
          Agregar
        </Button>
      </Paper>
    </>
  );
};
export default VentaTarjeta;
