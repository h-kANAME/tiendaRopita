import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import "../App.css";

//Alert Sweet
import Button from "@mui/material/Button";
//Alert Sweet

//Iconos
import InventoryIcon from "@mui/icons-material/Inventory";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddCircle from "@mui/icons-material/AddCircle";
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const VentasList = ({ ventas }) => {
  return (
    <>
      <div id="containerGrid">
        <div id="containerVentas">
          <Tooltip title="Venta con efectivo">
            <Button startIcon={<AddCircle />}>
              <Link
                startIcon={<ModeEditIcon />}
                to="ventaEfectivo"
                style={{ textDecoration: "none", color: "black" }}
              >
                Efectivo
              </Link>
            </Button>
          </Tooltip>

          <Tooltip title="Venta con tarjeta">
            <Button startIcon={<AddCircle />}>
              <Link
                startIcon={<ModeEditIcon />}
                to="ventaTarjeta"
                style={{ textDecoration: "none", color: "black" }}
              >
                Tarjeta
              </Link>
            </Button>
          </Tooltip>
        </div>
        <TableContainer
          component={Paper}
          style={{ width: "70%", margin: "auto" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="center">Fecha</StyledTableCell>
                <StyledTableCell align="center">Cliente</StyledTableCell>
                <StyledTableCell align="center">Tipo de Pago</StyledTableCell>
                <StyledTableCell align="center">Importe</StyledTableCell>
                <StyledTableCell align="center">Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ventas.map((ventas) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      {ventas.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ventas.fecha}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ventas.cliente.nombre} {ventas.cliente.apellido}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {" "}
                      {(() => {
                        if (ventas.coeficienteTarjeta !== undefined) {
                          return <p>Tarjeta</p>;
                        } else {
                          return <p>Efectivo</p>;
                        }
                      })()}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ventas.importeFinal}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {" "}
                      <Button
                        startIcon={<InventoryIcon />}
                        style={{ color: "black" }}
                      >
                        <Link
                          to={`/ventas/${ventas.id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          {" "}
                          Gestionar
                        </Link>
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
export default VentasList;
