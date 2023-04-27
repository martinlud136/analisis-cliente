import { useContext } from "react";

import { ClientesContext } from "../../components/context/client.context";

import  CardCliente  from "../../components/card-cliente/card-cliente.component"

import { CardClientesContainer } from "./liste-clientes.styles"

const ListaClientes = () => {
  const { clientes, esperanzaVida } = useContext(ClientesContext);
  return (
    <CardClientesContainer>
      {clientes.map((cliente) => {
        const {birthdate} = cliente
        const ageBirth = new Date(birthdate).getFullYear()
 
        const esperanzaVidaCliente = esperanzaVida.find(data => data[ageBirth] !== undefined)[ageBirth]
        return<CardCliente key={cliente.id} cliente={cliente} esperanzaVidaCliente={esperanzaVidaCliente}/>;
      })}
    </CardClientesContainer>
  );
};

export default ListaClientes;
