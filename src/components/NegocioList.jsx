import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

import Tooltip from '@mui/material/Tooltip';
import '../App.css';

//Alert Sweet
import Button from '@mui/material/Button';
import swal from 'sweetalert';
//Alert Sweet

//Iconos
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddCircle from '@mui/icons-material/AddCircle';
//Iconos

import Axios from "axios";

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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const NegocioList = () => {

  function sayHello(id) {
    swal({
      title: "¿Esta seguro que desea eliminar el Negocio?",
      text: "Una vez eliminado no se podra revertir este cambio.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          Axios.get(`http://localhost:8090/tienda/api/negocio/${id}`);
          swal("El negocio se elimino con exito", {
            icon: "success",
          }).then(function () {
            window.location.href = window.location.href;
          });;
        } else {
          swal("Operacion cancelada.");
        }
      });
  }
  const [negocio, setNegocio] = useState([]);
  return (
    
    <>
      <div id='containerGrid'>
        <div id='containerAgrPrenda'>
          <Tooltip title="Agregar Negocio">
            <Button startIcon={<AddCircle />}>
              <Link startIcon={<ModeEditIcon />} to="agregarNegocio" style={{ textDecoration: "none", color: "black" }}>Agregar</Link>
            </Button>
          </Tooltip>
        </div>
        <TableContainer component={Paper} style={{ width: '70%', margin: 'auto' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="left">Nombre</StyledTableCell>
                <StyledTableCell align="center"><ModeEditIcon /></StyledTableCell>
                <StyledTableCell align="center"><DeleteForeverIcon /></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {negocio.map(negocio => {
                return (
                  <StyledTableRow>
                    <StyledTableCell>{negocio.id}</StyledTableCell>
                    <StyledTableCell align="left">{negocio.descripcion}</StyledTableCell>
                    <StyledTableCell align="center"> <Button startIcon={<ModeEditIcon />} style={{ color: "black" }}><Link to={`/negocio/${negocio.id}`} style={{ textDecoration: 'none', color: "black" }}> Editar</Link></Button></StyledTableCell>
                    <StyledTableCell align="center"> <Button onClick={() => sayHello(negocio.id)} startIcon={<DeleteForeverIcon />} style={{ color: "black" }}>Eliminar</Button></StyledTableCell>
                  </StyledTableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default NegocioList;