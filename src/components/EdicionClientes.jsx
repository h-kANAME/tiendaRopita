import '../css/EditPrendasEditar.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from "axios";
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, Input, Button, Select, MenuItem, TextField } from '@mui/material';

//Alert Sweet

import swal from 'sweetalert';
//Alert Sweet

const EdicionClientes = () => {
  const { id } = useParams();
  const [clientes, setClientes] = useState([]);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [razonSocial, setRazonSocial] = useState("");

  useEffect(() => {
    Axios.get(`http://localhost:8090/tienda/api/clientes/${id}`)
      .then(res => setClientes(res.data));
    //  . then (res => setPrendas (console.log(res.data.content)) );
  }, [])


  function editarCliente() {

    swal({
      title: "Esta seguro que quiere modificar este Cliente?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          Axios.put(`http://localhost:8090/tienda/api/clientes/${id}`, {
            nombre,
            apellido,
            razonSocial
          })
            .then(function () {
              swal({
                title: "Cliente modificada con Exito.",
                icon: "success",
                buttons: true,
                dangerMode: true,
              }).then(function () {
                window.location.href = '/clientes';
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

  // const [descripcion, setDescripcion] = useState("");

  return (
    <>
      <Paper elevation={1}
        container justify="center"
        id="Carta"
      >
        <h5>Id Cliente N° {id}</h5>

        <div id="containerEditar">
          <form method="put">
            <FormControl id="inputStyle" method="post">
              <TextField required="true" label="Nombre" variant="outlined" placeholder={clientes.descripcion} onChange={(e) => setNombre(e.target.value)} />
            </FormControl>
            <br></br>

            <FormControl id="inputStyle" method="post">
              <TextField required="true" label="Apellido" variant="outlined" placeholder={clientes.descripcion} onChange={(e) => setApellido(e.target.value)} />
            </FormControl>
            <br></br>

            <FormControl id="inputStyle" method="post">
              <TextField required="true" label="Razon Social" variant="outlined" placeholder={clientes.razonSocial} onChange={(e) => setRazonSocial(e.target.value)} />
            </FormControl>
            <br></br>
          </form>
          <Button variant="contained" id="paraVosTambienHay" type="submit" onClick={() => editarCliente()}>Guardar</Button>
        </div>

      </Paper >
    </>
  );
}

export default EdicionClientes