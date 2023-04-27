import { useState } from "react";

import { Button, Form, Segment } from "semantic-ui-react";
import FormInput from "../../components/form-input/form-input.components";
import { crearCliente } from "../../utils/firebase/firebase.utils";

import { FormClienteContainer } from "./form-cliente.styles";

const initialValues = {
  name: "",
  surname: "",
  age: "",
  birthdate: "",
};

const FormCliente = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const { name, surname, age, birthdate } = formValues;
  const resetValues = () => setFormValues(initialValues);

  const onChangeForm = (e) => {
    const { value, name } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearCliente(formValues);
    resetValues();
  };
  return (
    <FormClienteContainer>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <FormInput
            label="Nombre"
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={onChangeForm}
            value={name}
          />
          <FormInput
            label="Apellido"
            type="text"
            placeholder="Apellido"
            name="surname"
            onChange={onChangeForm}
            value={surname}
          />
          <FormInput
            label="Edad"
            type="number"
            placeholder="Edad"
            name="age"
            onChange={onChangeForm}
            value={age}
          />
          <FormInput
            label="Fecha de Nacimiento"
            type="date"
            placeholder="Fecha de Nacimiento"
            name="birthdate"
            onChange={onChangeForm}
            value={birthdate}
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </Segment>
    </FormClienteContainer>
  );
};

export default FormCliente;
