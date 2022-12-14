import '../css/EditPrendasEditar.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from "axios";
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Input, Button, Select, MenuItem, TextField } from '@mui/material';

//Alert Sweet
import swal from 'sweetalert';
//Alert Sweet

const EdicionPrendas = () => {
  const { id } = useParams();
  const [prendas, setPrendas] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [precioBase, setPrecioBase] = useState("");

  useEffect(() => {
    Axios.get(`http://localhost:8090/tienda/api/prendas/${id}`)
      .then(res => setPrendas(res.data));
    //  . then (res => setPrendas (console.log(res.data.content)) );
  }, [])

  function editarPrenda() {
    swal({
      title: "Esta seguro que quiere modificar esta prenda?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          Axios.put(`http://localhost:8090/tienda/api/prendas/${id}`, {
            descripcion,
            tipo,
            estado,
            precioBase
          })
            .then(function () {
              swal({
                title: "Prenda modificada con Exito.",
                icon: "success",
                buttons: true,
                dangerMode: true,
              }).then(function () {
                window.location.href = '/prendas';
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
      <Paper elevation={1}
        container justify="center"
        id="Carta"
      >
        <h5>Id Producto N?? {id}</h5>

        <div id="containerEditar">
          <form method="put">
            <FormControl id="inputStyle" method="post">
              <TextField required="true" label="Nombre" variant="outlined" placeholder={prendas.descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </FormControl>
            <br></br>
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
                <MenuItem value="Camisa">Camisa</MenuItem>
                <MenuItem value="Campera">Campera</MenuItem>
                <MenuItem value="Camisa">Camisa</MenuItem>
                <MenuItem value="Tapado">Tapado</MenuItem>
                <MenuItem value="Chaqueta">Chaqueta</MenuItem>
                <MenuItem value="Media">Media</MenuItem>
                <MenuItem value="Bufanda">Bufanda</MenuItem>
              </Select>
            </FormControl>

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
                <MenuItem value="NUEVA">Nueva</MenuItem>
                <MenuItem value="PROMOCION">Promocion</MenuItem>
                <MenuItem value="LIQUIDACION">Liquidacion</MenuItem>
              </Select>
            </FormControl>

            <FormControl id="inputStyleJiji" method="post">
              <TextField required="true" label="Precio Base" variant="outlined" placeholder={prendas.precioBase} onChange={(e) => setPrecioBase(e.target.value)} />
            </FormControl>
            <br></br>
          </form>
          <Button variant="contained" id="paraVosTambienHay" type="submit" onClick={() => editarPrenda()}>Guardar</Button>
        </div>
      </Paper >
    </>
  );
}
export default EdicionPrendas