import { useContext } from "react";
import { Card } from "semantic-ui-react";

import { ClientesContext } from "../../components/context/client.context";

import { CardContainer } from "./proyeccion-analisis.styles";

const obtenerMedia = (edades) => {
  const sumaEdades = edades.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sumaEdades / edades.length;
};

const obtenerDesviacionALaMedia = (media, edades) => {
  return edades.map((edad) => parseInt(Math.pow(edad - media, 2)));
};

const calculoDesviacionEstandar = (clientes) => {
  const edades = clientes.map((cliente) => parseInt(cliente.age));
  const media = obtenerMedia(edades);
  const desviacionALaMedia = obtenerDesviacionALaMedia(media, edades);
  const sumaDesviaciones = desviacionALaMedia.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return parseInt(Math.sqrt(sumaDesviaciones / edades.length));
};

const calculoPromedioEdad = (clientes) => {
  const edades = clientes.map((cliente) => parseInt(cliente.age));
  return obtenerMedia(edades);
};
const ProyeccionAnalisis = () => {
  const { clientes } = useContext(ClientesContext);
  const desviacionEstandar = calculoDesviacionEstandar(clientes);
  const promedioDeEdad = calculoPromedioEdad(clientes);

  return (
    <CardContainer>
      <Card
      >
        <Card.Content description={`Desviación estandar: ${desviacionEstandar}`}/>
        <Card.Content description={`Promedio de Edades: ${promedioDeEdad}`}/>

      </Card>
    </CardContainer>
  );
};

export default ProyeccionAnalisis;
