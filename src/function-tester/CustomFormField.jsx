import { Button, Form, InputGroup } from "react-bootstrap";
import { IoMdAddCircle } from "react-icons/io";
import { HiMinusCircle } from "react-icons/hi";
import { useState } from "react";

export function CustomFormField({ name, data }) {
  let type;
  if (typeof(data) !== "string") {
    type = typeof (data);
    if (Array.isArray(data)) {
      type = "array";
    }
  } else {
    type = data;
  }

  const spacey = { margin: "8px 0 8px 0" };
  const btnStyle = { backgroundColor: "unset", border: "unset", padding: "0 4px 0 4px", paddingLeft: "20px" };

  let field;

  switch (type) {
    case "object":
      const keys = Object.keys(data);
      // console.log(typeof(keys));
      field = (
        <Form.Group>
          <h6>Object</h6>
          <Form.Group style={{ paddingLeft: "20px" }}>
            { keys.map((item)=> {
              return (<CustomFormField key={ item } name={ item } data={ data[item] } />);
            }) }
          </Form.Group>
        </Form.Group>
      );
      break;
    case "array":
      field = (
        <Form.Group>
          <h6>Array</h6>
            <Form.Group style={{ paddingLeft: "20px" }}>
              <InputGroup>
                { data.map((item, index)=> { return (<CustomFormField key={ `array[${index}]` } name={ `array[${index}]` } data={ item } />); }) }
                <Button style={ btnStyle } ><HiMinusCircle style={{ color: "red" }} size={"2em"} /></Button>
              </InputGroup>
            </Form.Group>
          <Button style={ btnStyle } onClick={ () => { setInner(inner.push(innerField)) } } ><IoMdAddCircle style={{ color: "green" }} size={"2em"} /></Button>
        </Form.Group>
      );
      break;
    case "boolean":
      field = (
        <Form.Group style={ spacey } controlId={ name } className={ "mb-3" }>
          <Form.Check type="switch" id={`check-${ name }`} label={ name } />
        </Form.Group>
      );
      break;
    case "number":
      field = (
        <Form.FloatingLabel style={ spacey } controlId={ name } label={ name }>
          <Form.Control required type="number" placeholder="number" />
        </Form.FloatingLabel>
      );
      break;
    case "string":
      field = (
        <Form.FloatingLabel style={ spacey } controlId={ name } label={ name }>
          <Form.Control required type="text" placeholder="string" />
        </Form.FloatingLabel>
      );
      break;
    default:
      console.log(`Error! Data type ${ type } is not supported! `);
  }

  return (
    <>
      { field }
    </>
  );
}
