import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../css/EditAgregarPrenda.css';
import '../App.css';
import Paper from '@mui/material/Paper';
import { FormControl, Input, InputLabel, Button, Select, MenuItem, TextField } from '@mui/material';
import Axios from "axios";
//Alert Sweet
import swal from 'sweetalert';
//Alert Sweet

const VentasEdicion = ({prendaslist}) => {
    //Atrae datos
    const { id } = useParams();

    const { iditem } = useParams();

    //Utiliza el post
    const [cantidad, setCantidad] = useState([]);
    
    //Datos Preestablecidos
    const [arreglo, setArreglo] = useState([]);
    const [itemCompleto, setitemCompleto] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:8090/tienda/api/ventas/${id}`)
          //.then(res => setitemCompleto(res.data.items));
          .then (res => setArreglo(console.log(res.data.items)))

      }, []);

    function agregarItem() {
      swal({
        title: "Esta seguro que quiere modificar esta Venta?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            Axios.put(`http://localhost:8090/tienda/api/ventas/${id}/items/${iditem}`, {
              cantidad
            })
              .then(function () {
                swal({
                  title: "Venta modificada con Exito.",
                  icon: "success",
                  buttons: true,
                  dangerMode: true,
                }).then(function () {
                  window.location.href = `/ventas/Gestionar/${id}`;
                })
              })
              .catch(function () {
                swal({
                  title: "ERROR",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then(function () {
                  window.location.href = window.location.href;
                })
              });
          } else {
            swal("Operacion cancelada.");
          }
        });
    }
  return (
    <>
      <Paper elevation={1} container justify="center" id="Carta">
        <form>
          <br></br>

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }}>
          <TextField
            disabled id="outlined-disabled"
            label={"Venta ID :  " + iditem}
            />
          </FormControl>

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }} method="post">
            <InputLabel>Prendas</InputLabel>
            <Select
              required="true"
              autoWidth
              label="Prendas"
              disabled id="outlined-disabled"
            >
              {prendaslist.map((prendaslist) => {
                return (
                  <MenuItem value={prendaslist.id} key={prendaslist.id}>
                    {prendaslist.descripcion}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <br></br>
          <FormControl id="inputStyle" method="post">
            <TextField required="true" 
            type="number"
            label="Cantidad" 
            variant="outlined" 
            placeholder="Cantidad"  
            onChange={(e) => setCantidad(e.target.value)}/>
          </FormControl>
        </form>
        <Button
          style={{ padding: 20 }}
          type="submit"
          onClick={() => agregarItem()}
          >
          Agregar
        </Button>
      </Paper>
    </>
  );
}

export default VentasEdicion