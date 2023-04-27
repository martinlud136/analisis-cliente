import { Form } from "semantic-ui-react";

const FormInput = ({label,...restProps}) => {
  return (
    <Form.Field>
      <label>{label}</label>
      <input
        {...restProps}
      />
    </Form.Field>
  );
};
export default FormInput;
