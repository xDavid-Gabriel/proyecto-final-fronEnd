import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AuthContextProvider} from "./context/authContext";

//import NombreFunción from "ruta/Nombre_Archivo"
import Pagina1 from "./components/Pagina1";
import Pagina2View from "./views/Pagina2View";
import Pagina3 from "./components/Pagina3";
import Pagina4 from "./components/Pagina4";
import Pagina5 from "./components/Pagina5";
import Pagina6 from "./components/Pagina6";
import Navegacion from "./components/Navegacion"

export default function App() {
  return (

    <AuthContextProvider>
      <Router>
        <Navegacion/>
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2View />} />
          <Route path="/pagina3" element={<Pagina3 />} />
          <Route path="/pagina4" element={<Pagina4 />} />
          <Route path="/pagina5" element={<Pagina5 />} />
          <Route path="/pagina6" element={<Pagina6 />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}
