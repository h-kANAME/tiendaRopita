import { useState } from 'react';
import '../css/EditAgregarPrenda.css';
import '../App.css';
import Paper from '@mui/material/Paper';
import { FormControl, Input, InputLabel, Button, Select, MenuItem, TextField } from '@mui/material';
import Axios from "axios";
//Alert Sweet
import swal from 'sweetalert';
//Alert Sweet

const VentasAgregarItem = () => {
  return (
    <>
      <Paper elevation={1} container justify="center" id="Carta">
        <form>
          <br></br>

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }} method="post">
          <TextField
            disabled id="outlined-disabled"
              placeholder="Venta"
            />
          </FormControl>

          <FormControl id="inputStyle" method="post">
            <TextField required="true" label="Prenda" variant="outlined" placeholder="Prenda"/>
          </FormControl>
          <br></br>
          <FormControl id="inputStyle" method="post">
            <TextField required="true" label="Cantidad" variant="outlined" placeholder="Cantidad"/>
          </FormControl>
        </form>
        <Button
          style={{ padding: 20 }}
          type="submit"
          >
          Agregar
        </Button>
      </Paper>
    </>
  );
}

export default VentasAgregarItem