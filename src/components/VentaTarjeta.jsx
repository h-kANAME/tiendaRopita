import { useState, useEffect } from "react";
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
  const [cliente, setCliente] = useState("");
  const [cantCuotas, setCantCuotas] = useState("");
  const [negocio, setNegocio] = useState("");

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
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
          Axios.post(`localhost:8090/tienda/api/ventas/tarjeta`, {
            cliente,
            cantCuotas,
            negocio,
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
            });

          break;

        case "agregarContinuar":
          Axios.post(`localhost:8090/tienda/api/ventas/tarjeta`, {
            cliente,
            cantCuotas,
            negocio,
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
    {/*De momento (Tampoco estuve tanto tiempo) no encontre alguna solucion respecto a la carga de datos, debe ser una boludez.
    Lo que me importa es lo comentado abajo, de negocios debido a que esto (Si le dedico mas tiempo) es solucionable. 
    Si esta listo esto entonces VentasEfectivo estara listo, debido a que es exactamente lo mismo pero sin cantidad*/}
      <Paper elevation={1} container justify="center" id="Carta">
        <form>
          <br></br>

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }}>
            <InputLabel>Cliente</InputLabel>
            <Select
              required="true"
              autoWidth
              label="Tipo"
              onChange={(e) => setCliente(e.target.value)}
            >
              {clienteslist.map((clienteslist) => {
                return (
                  <MenuItem value={clienteslist.id}>
                    {clienteslist.nombre}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }}>
            <TextField disabled id="outlined-disabled" label={date} />
          </FormControl>
          <FormControl id="inputStyleJiji" method="post">
            <TextField
              required="true"
              label="Cantidad De Cuotas"
              variant="outlined"
              placeholder="Cantidad"
              onChange={(e) => setCantCuotas(e.target.value)}
            />
          </FormControl>
          <br></br>
          <FormControl id="inputStyleJiji" method="post">
            <TextField
              required="true"
              label="Negocio"
              variant="outlined"
              placeholder="Negocio"
              onChange={(e) => setNegocio(e.target.value)}
            />
          </FormControl>
          {/*No logro entender la razon del por que no me lista al igual que clientes, por lo que estuve analizando es por como llamamos al array
          en la page Ventas.JSX donde le pasamos el parametro de negociosList.
          Si vos haces un console, te trae bien el array, pero no logro entender como ingresar a los indices respectivos y sacar los datos necesarios.
          Cuando lo compiles veas console creoo que me vas a entender, de ultima hablame al wsp*/}
          {/* <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }}>
            <InputLabel>Negocio</InputLabel>
            <Select
              required="true"
              autoWidth
              label="Tipo"
              onChange={(e) => setNegocio(e.target.value)}
            >
              {negocioslist.map((negocioslist) => {
                return (
                  <MenuItem value={negocioslist.id}>
                    {negocioslist.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl> */}
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
