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
import AddCircle from '@mui/icons-material/AddCircle';
//Iconos

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
  const [ventas, setVentas] = useState({});
  const { id } = useParams();

   useEffect(() => {
     Axios.get(`http://localhost:8090/tienda/api/ventas/${id}`)
       .then(res => setVentas(res.data));

  //   //.then(res => setVentas(console.log(res.data)));
   }, [])


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
                <StyledTableCell align="left">Fecha</StyledTableCell>
                <StyledTableCell align="left">Cliente</StyledTableCell>
                <StyledTableCell align="left">Importe</StyledTableCell>
                <StyledTableCell align="left">Detalles</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

               {this.ventas.map(ventas => {
              console.log(ventas);
              return (

                <StyledTableRow>
                  <StyledTableCell align="left">{ventas.id}</StyledTableCell>
                  <StyledTableCell align="left">{ventas.fecha}</StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  {/* <StyledTableCell align="left">{ventas.cliente.nombre} {" "} {ventas.cliente.apellido}</StyledTableCell> */}
                  <StyledTableCell align="left">{ventas.importeFinal}</StyledTableCell>
                  <StyledTableCell align="left">+</StyledTableCell>
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
export default VentasGestionarItem;