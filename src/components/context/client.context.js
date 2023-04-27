import { createContext, useEffect, useState } from "react";
import { obtenerClientes } from "../../utils/firebase/firebase.utils";
import ESPERANZA_VIDA from "./esperanza-vida.json"
export const ClientesContext = createContext([]);

export const ClietesProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);
  const [esperanzaVida, setEsPeranzaVida] = useState([])

  const value = {
    clientes,
    esperanzaVida,
    setClientes,
  };

  useEffect(() => {
    const fetchClientesABd = async () => {
      const clientes = await obtenerClientes();
      setClientes(clientes);
      setEsPeranzaVida(ESPERANZA_VIDA)
    };
    fetchClientesABd();
  }, []);

  return (
    <ClientesContext.Provider value={value}>
      {children}
    </ClientesContext.Provider>
  );
};
