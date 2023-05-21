import { Button, Form, Modal } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { CustomFormField } from "./CustomFormField.jsx";
import { useState } from "react";

export function CustomTestEditorModal({ modalData }) {
  const { style, close, state, input, output, test } = modalData;
  // console.log(test);
  const [validated, setValidated] = useState(false);
  const validateForm = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }

  return (
    <Modal show={ state } onHide={ close }>
      <Modal.Body>
        <Form noValidate validated={ validated } onSubmit={ validateForm }>
          <Form.FloatingLabel
            controlId={ "testName" }
            label={ "Test name" }
            className={ "mb-3" }>
            <Form.Control
              required
              type="text"
              defaultValue={ test.name }
            />
          </Form.FloatingLabel>
          <CustomFormField />
          <Button type={ "submit" } variant="success">
            Save Test <FaSave size={ '1.2em' } />
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ close }>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}