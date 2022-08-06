import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from "axios";

import Button from '@mui/material/Button';

const PrendasDelete = () => {
    const { id } = useParams();
    const [prendas, setPrendas] = useState([]);

    useEffect(() => {
      Axios.get(`http://localhost:8090/tienda/api/prendas/${id}`)
        .then(res => setPrendas(res.data));
      //  . then (res => setPrendas (console.log(res.data.content)) );
    }, [])
    //function boton() { console.log('standard'); }
    return (
        <div>
        <h1>Existo</h1>
        <Button variant="contained">Existo</Button>
        </div>
    );
  }

  export default PrendasDelete