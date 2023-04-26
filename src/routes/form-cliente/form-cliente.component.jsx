import { useState } from "react";

import { Button, Form } from "semantic-ui-react";
import FormInput from "../../components/form-input/form-input.component";
import "semantic-ui-css/semantic.min.css";

const initialValues = {
  name: "",
  surname: "",
  age: "",
  birthdate: "",
};

const FormCliente = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const { name, surname, age, birthdate } = formValues;

  const onChangeForm = (e) => {
    const { value, name } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formValues);
      }}
    >
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
  );
};

export default FormCliente;
