import { Routes, Route } from "react-router-dom";

import FormCliente from "./routes/form-cliente/form-cliente.component";
import Navigation from "./routes/navigation/navigation.component";
import ListaClientes from "./routes/lista-clientes/lista-clientes.compoent";
import ProyeccionAnalisis from "./routes/proyeccion-analisis/proyeccion-analisis.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<FormCliente />} />
        <Route path="clients" element={<ListaClientes />}/>
        <Route path="analisis" element={<ProyeccionAnalisis />}/>
      </Route>
    </Routes>
  );
}

export default App;
