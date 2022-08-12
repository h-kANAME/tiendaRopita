import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Icon muy material
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';

//Svg Icon
import SvgIcon from '@mui/material/SvgIcon';

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

const PrendasList = ({ prendas }) => {

  function sayHello(id) {
    swal({
      title: "Esta seguro que quiere eliminar esta prenda?",
      text: "Una vez eliminada no se podra revertir este cambio.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          Axios.delete(`http://localhost:8090/tienda/api/prendas/${id}`);
          swal("La prenda se elimino con exito!", {
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

      <div id='containerAgrPrenda'>
        <Button startIcon={<AddCircle />}>
          <Link startIcon={<ModeEditIcon />} to="agregarPrendas" style={{ textDecoration: "none", color: "black" }}>Agregar Prenda</Link>
        </Button>
      </div>

      <div id='containerGrid'>
        <TableContainer component={Paper} style={{ width: '50%', margin: 'auto' }}>
          {/* <div id='containerAgrPrenda'>
            <Button startIcon={<AddCircle />}>
              <Link startIcon={<ModeEditIcon />} to="agregarPrendas" style={{ textDecoration: "none", color: "black" }}>Agregar Prenda</Link>
            </Button>
          </div> */}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="left">Descripcion</StyledTableCell>
                <StyledTableCell align="center">Tipo</StyledTableCell>
                <StyledTableCell align="center">Precio Base</StyledTableCell>
                <StyledTableCell align="center"><ModeEditIcon /></StyledTableCell>
                <StyledTableCell align="center"><DeleteForeverIcon /></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prendas.map(prendas => {
                return (
                  <StyledTableRow>
                    <StyledTableCell>{prendas.id}</StyledTableCell>
                    <StyledTableCell align="left">{prendas.descripcion}</StyledTableCell>
                    <StyledTableCell align="center">{prendas.tipo}</StyledTableCell>
                    <StyledTableCell align="center">{prendas.precioBase}</StyledTableCell>
                    <StyledTableCell align="center"> <Button startIcon={<ModeEditIcon />} style={{ color: "black" }}><Link to={`/prendas/${prendas.id}`} style={{ textDecoration: 'none', color: "black" }}> Editar</Link></Button></StyledTableCell>
                    <StyledTableCell align="center"> <Button onClick={() => sayHello(prendas.id)} startIcon={<DeleteForeverIcon />} style={{ color: "black" }}>Eliminar</Button></StyledTableCell>
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
export default PrendasList;