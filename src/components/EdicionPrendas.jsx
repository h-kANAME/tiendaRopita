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
      title: "Se ingresaron estos datos en la prenda:", //Titulo
      text: "Emma despues te escribo los datos ", //Cuerpo
      icon: "warning", // Info icono de Info, Sucess icono de Completo, Warning Icono de Advertencia
      buttons: true, //Si le pones true se vuelve un OK
      dangerMode: true, //Se vuelve un Cancel
    })
    .then((willDelete) => { //willDelete es el nobmre que se te cante el ortovich
      if (willDelete) { //Condicional del OK
        swal("Se modificaron los datos con total exito.", {
          icon: "success",
        });
        Axios.put(`http://localhost:8090/tienda/api/prendas/${id}`, {
          descripcion,
          tipo,
          estado,
          precioBase
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else { // Condicional del CANCEL
        swal("Se cancelo el Cambio.");
      }
    });

  }


  function editarPrenda() {
  }

  // const [descripcion, setDescripcion] = useState("");

  return (
    <>
      <Paper elevation={1}
        container justify="center"
        id="Carta"
      >
        <h5>Id Producto N° {id}</h5>

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
                <MenuItem value="Nueva">Nueva</MenuItem>
              </Select>
            </FormControl>

            <FormControl id="inputStyleJiji" method="post">
              <TextField required="true" label="Precio Base" variant="outlined" placeholder={prendas.precioBase} onChange={(e) => setPrecioBase(e.target.value)} />
            </FormControl>
            <br></br>
            <Button variant="contained" id="paraVosTambienHay" type="submit" onClick={() => editarPrenda()}>Guardar</Button>
          </form>
        </div>

      </Paper >
    </>
  );
}

export default EdicionPrendas