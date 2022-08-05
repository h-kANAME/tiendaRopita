import { Link } from "react-router-dom";

const PrendasList = ({ prendas }) => {
    return (
        <ul>
            {prendas.map(prendas => {
                return (
                    <>
                        <li key={prendas.id}> ID: {" "} {prendas.id}</li>
                        <li key={prendas.descripcion}> {prendas.descripcion}</li>
                        <li>Editar {" "} <Link to={`/prendas/${prendas.id}`}>Editar</Link></li>
                    </>
                )
            })}
        </ul>
    );
}

export default PrendasList;