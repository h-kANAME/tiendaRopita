import '../css/EditAgregarPrenda.css';
import '../App.css';
import Paper from '@mui/material/Paper';
import { FormControl, Button, MenuItem, Select, InputLabel } from '@mui/material';
import Axios from "axios";
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import swal from 'sweetalert';

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

const NegocioGanancias = ({ negocios, ventas }) => {
  const [fecha, setFecha] = useState("");
  const [negocioId, setNegocioId] = useState("");
  const [negocioGanancias, setGanancias] = useState([]);

  function obtenerFecha() {
    console.log(fecha);
  }

  function calcularGanancia() {
    Axios.post(`http://localhost:8090/tienda/api/negocios/${negocioId}/profit`, {
      fecha,

    })
      .then(res => setGanancias(res.data))
      .catch(function () {
        swal("Ocurrio un error.", { icon: "error" });
      });

    handleToggle();
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Paper elevation={1}
        container justify="center"
        id="Carta"
      >
        <form method="post">
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <FormControl>
              <Alert id="gananciaStyle" severity="success"> El negocio ha generado <p>${negocioGanancias.gananciaTotal} de ganancia!</p></Alert>
            </FormControl>
          </Backdrop>

          <br></br>
          <br></br>
          <br></br>

          <FormControl id="selectStyle" sx={{ m: 2, minWidth: 300 }} method="post">
            <InputLabel>Negocio</InputLabel>
            <Select
              required="true"
              autoWidth
              label="Negocio"
              onChange={(e) => setNegocioId(e.target.value)}
            >
              {negocios.map((negocios) => {
                return (
                  <MenuItem key={negocios.id} value={negocios.id} >
                    {negocios.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl id="selectStyle" sx={{ m: 2, minWidth: 300 }} method="post">
          <InputLabel>Fecha</InputLabel>
            <Select
              required="true"
              autoWidth
              onChange={(e) => setFecha(e.target.value)}
            >
              {ventas.map((ventas) => {
                return (
                  <MenuItem key={ventas.fecha} value={ventas.fecha} >
                    {ventas.fecha}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <br></br>
        </form>
        <Button style={{ padding: 20 }} type="submit" onClick={() => calcularGanancia()}>Consultar Ganancias</Button>
      </Paper >
    </>
  );
}
export default NegocioGanancias