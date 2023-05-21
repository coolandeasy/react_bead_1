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
          <h5>Test name</h5>
          <Form.FloatingLabel
            controlId={ "testName" }
            label={ "Test name" }
            className={ "mb-3" }>
            <Form.Control
              required
              type="text"
              placeholder={ "Test name" }
              defaultValue={ test.name }
            />
          </Form.FloatingLabel>
          <h5>Input</h5> <hr/>
          <CustomFormField name={ "input" } data={ input } />
          <h5>Output</h5> <hr/>
          <CustomFormField name={ "output" } data={ output } />
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