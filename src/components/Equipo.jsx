import '../App.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';
import { CFooter, CLink } from '@coreui/react';

const Equipo = () => {
  return (
    <>
      <div id="containerEquipo">
        <div id="cartaEquipo">
          <Stack direction="row" spacing={8}>
            <Avatar sx={{ bgcolor: blue[800] }}>NC</Avatar>
            <Avatar sx={{ bgcolor: blue[800] }}>EL</Avatar>
            <Avatar sx={{ bgcolor: blue[800] }}>GL</Avatar>
            <Avatar sx={{ bgcolor: blue[800] }}>FM</Avatar>
          </Stack>
        </div>
        {/* href="https://github.com/h-kANAME/dv-ds-20221c-g6" target="_blank" */}
      </div >
      <div>
        <CFooter>
          <div>
            <CLink>
              {/* <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" width="30" height="30" /> */}
            </CLink>
          </div>
        </CFooter>
      </div>
    </>
  );
}
export default Equipo;