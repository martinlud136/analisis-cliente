import { useContext } from "react";

import { ClientesContext } from "../../components/context/client.context";

import  CardCliente  from "../../components/card-cliente/card-cliente.component"

import { CardClientesContainer } from "./liste-clientes.styles"

const ListaClientes = () => {
  const { clientes } = useContext(ClientesContext);
  return (
    <CardClientesContainer>
      {clientes.map((cliente) => {
        return<CardCliente key={cliente.name} cliente={cliente}/>;
      })}
    </CardClientesContainer>
  );
};

export default ListaClientes;
