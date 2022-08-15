import NegocioList from "../components/NegocioList";
import { Routes, Route } from "react-router-dom";

const Negocio = () => {
  return (
    <>
      <main>
        <Routes>
          <Route index element={<NegocioList/>} />
        </Routes>
      </main>
    </>
  );
}

export default Negocio