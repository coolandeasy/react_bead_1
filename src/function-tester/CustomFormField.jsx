import { Button, Form } from "react-bootstrap";

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

  // console.log("testing custom field data type", data, type);

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
            { data.map((item, index)=> { return (<CustomFormField key={ `array[${index}]` } name={ `array[${index}]` } data={ item } />); }) }
          </Form.Group>
        </Form.Group>
      );
      break;
    case "boolean":
      field = (
        <Form.Group controlId={ name } className={ "mb-3" }>
          <Form.Check type="switch" id={`check-${ name }`} label={ name } />
        </Form.Group>
      );
      break;
    case "number":
      field = (
        <Form.FloatingLabel controlId={ name } label={ name }>
          <Form.Control type="number" placeholder="number" />
        </Form.FloatingLabel>
      );
      break;
    case "string":
      field = (
        <Form.FloatingLabel controlId={ name } label={ name }>
          <Form.Control type="text" placeholder="string" />
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
