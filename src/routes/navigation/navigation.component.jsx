import { Outlet } from "react-router-dom";
import { NavigationContainer, NavLink } from "./navigation.styles";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <NavLink to="/">
          <h3>Creacion de Cliente</h3>
        </NavLink>
        <NavLink to="clients">
          <h3>Lista de Clientes</h3>
        </NavLink>
        <NavLink to="analisis">
          <h3>Proyección y análisis</h3>
        </NavLink>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
