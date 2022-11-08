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

const VentasAgregarItem = ({prendaslist}) => {
    //Atrae datos
    const { id } = useParams();

    

    //Utiliza el post
    const [prendaId, setPrenda] = useState([]);
    const [cantidad, setCantidad] = useState([]);

   
    
  
    // {ventaId: 19
    //   prendaId: 1
    //   cantidad: 1}

    function agregarItem() {
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
            Axios.post(`http://localhost:8090/tienda/api/ventas/${id}/items`, {
              prendaId,
              cantidad
            })
              .then(function () {
                swal("Se agrego el item con exito.", {
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
            Axios.post(`http://localhost:8090/tienda/api/ventas/${id}/items`, {
              prendaId,
              cantidad
  
            })
              .then(function () {
                swal("Se agrego el item con exito.", {
                  icon: "success",
                }).then(() => {
                  window.location.href = `/ventas/Gestionar/${id}`;
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

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }}>
          <TextField
            disabled id="outlined-disabled"
              placeholder={"Venta ID :  " + id}
            />
          </FormControl>

          <FormControl id="selectStyle" sx={{ m: 0.5, minWidth: 300 }} method="post">
            <InputLabel>Prendas</InputLabel>
            <Select
              required="true"
              autoWidth
              label="Prendas"
              onChange={(e) => setPrenda(e.target.value)}
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

export default VentasAgregarItem