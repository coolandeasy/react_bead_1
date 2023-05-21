import { Button, Form } from "react-bootstrap";

export function CustomFormField() {



  return (
      <Form.FloatingLabel
      label={ "testLabel" }
      className={ "mb-3" }>
        <Form.Control
          type="text"
          placeholder="TestName"
        />
      </Form.FloatingLabel>
  );
}
