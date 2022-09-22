import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Axios from "axios";

import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import Tooltip from '@mui/material/Tooltip';
import '../App.css';
import Button from '@mui/material/Button';

//Iconos
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircle from '@mui/icons-material/AddCircle';
//Iconos

//Alert Sweet
import swal from 'sweetalert';
//Alert Sweet

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const VentasGestionarItem = () => {
  const [ventas, setVentas] = useState([]);
  const [importeFinal, setimporteFinal] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:8090/tienda/api/ventas/${id}`)
      .then(res => setVentas(res.data.items));
    //.then(res => setVentas(console.log(res.data)));
  }, []);

  useEffect(() => {
    Axios.get(`http://localhost:8090/tienda/api/ventas/${id}`)
      .then(res => setimporteFinal(res.data.importeFinal));
    //.then(res => setVentas(console.log(res.data)));
  }, []);

  function sayHello(id) {
    swal({
      title: "Esta seguro que quiere eliminar esta venta?",
      text: "Una vez eliminada no se podra revertir este cambio.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          Axios.get(`http://localhost:8090/tienda/item/delete/${id}`);
          swal("La venta se elimino con exito!", {
            icon: "success",
          }).then(function () {
            window.location.href = window.location.href;
          });;
        } else {
          swal("Operacion cancelada.");
        }
      });
  }

  return (

    <>
      <div id='containerGrid'>
        <div id='containerVentas'>
          <Tooltip title="Agregar Item">
            <Button startIcon={<AddCircle />}>
              <Link startIcon={<ModeEditIcon />} to="ventaTarjeta" style={{ textDecoration: "none", color: "black" }}>Agregar</Link>
            </Button>
          </Tooltip>
        </div>
        <TableContainer component={Paper} style={{ width: '70%', margin: 'auto' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="left">Cantidad</StyledTableCell>
                <StyledTableCell align="left">Prenda</StyledTableCell>
                <StyledTableCell align="left">Importe</StyledTableCell>
                <StyledTableCell align="center"><ModeEditIcon /></StyledTableCell>
                <StyledTableCell align="center"><DeleteForeverIcon /></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ventas.map(ventas => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="left">{ventas.id}</StyledTableCell>
                    <StyledTableCell align="left">{ventas.cantidad}</StyledTableCell>
                    <StyledTableCell align="left">{ventas.prenda.descripcion}</StyledTableCell>
                    <StyledTableCell align="left">{ventas.importe}</StyledTableCell>
                    <StyledTableCell align="center"> <Button startIcon={<ModeEditIcon />} style={{ color: "black" }}>Editar</Button></StyledTableCell>
                    <StyledTableCell align="center"> <Button onClick={() => sayHello(ventas.id)} startIcon={<DeleteForeverIcon />} style={{ color: "black" }}>Eliminar</Button></StyledTableCell>
                  </StyledTableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <h1>{importeFinal}</h1>
      </div>
    </>
  );
}
export default VentasGestionarItem;