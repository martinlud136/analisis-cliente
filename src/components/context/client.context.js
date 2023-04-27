import { createContext, useEffect, useState } from "react";
import { obtenerClientes } from "../../utils/firebase/firebase.utils";

export const ClientesContext = createContext([]);

export const ClietesProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  const value = {
    clientes,
    setClientes,
  };

  useEffect(() => {
    const fetchClientesABd = async () => {
      const clientes = await obtenerClientes();
      setClientes(clientes);
    };
    fetchClientesABd();
  }, []);

  return (
    <ClientesContext.Provider value={value}>
      {children}
    </ClientesContext.Provider>
  );
};
