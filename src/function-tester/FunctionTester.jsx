import { PremadeTestList } from "./PremadeTestList.jsx";
import { CustomTestList } from "./CustomTestList.jsx";
import { CustomTestEditorModal } from "./CustomTestEditorModal.jsx";
import { useState } from "react";
import { Button } from "react-bootstrap";

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  const err = {premade: true, custom: true};
  const [syntaxError, setSyntaxError] = useState(true);
  const [customTests, changeCustomTests] = useState(
    [{
    name: "empty input",
    testFn: (fn) => {
      const input = {
        x: [],
        limit: 0
      };
      const output = fn(input);
      return Array.isArray(output) && output.length === 0;
    },
    points: 30,
  },
    {
      name: "one element, OK",
      testFn: (fn) => {
        const input = {
          x: [{ name: "Győző", grade: 5 }],
          limit: 5
        };
        const output = fn(input);
        return Array.isArray(output) &&
          output.length === 1 &&
          output[0] === "Győző";
      },
      points: 30,
    },
    {
      name: "one element, not OK",
      testFn: (fn) => {
        const input = {
          x: [{ name: "Győző", grade: 4 }],
          limit: 5
        };
        const output = fn(input);
        return Array.isArray(output) &&
          output.length === 0;
      },
      points: 30,
    },
    {
      name: "multiple elements",
      testFn: (fn) => {
        const input = {
          x: [
            { name: "Győző", grade: 2 },
            { name: "Dávid", grade: 4 },
            { name: "Bendegúz", grade: 5 },
            { name: "Imre", grade: 3 },
          ],
          limit: 4
        };
        const output = fn(input);
        const expectedOutput = ["Dávid", "Bendegúz"];
        return JSON.stringify(output) === JSON.stringify(expectedOutput);
      },
      points: 60,
    }]);

  //region Modal
  const [modalState, toggleModal] = useState(false);
  const [test, setTest] = useState({});
  const handleClose = () => toggleModal(false);
  const handleShow = () => toggleModal(true);
  const modalStyle = {
    content: {
      margin: "auto",
      width: "45%",
      height: "55%"
    },
  }
  const modalData = {style: modalStyle, close: handleClose, state: modalState, input: input, output: output, test: test};
  //endregion

  return (
    <>
      <h1>FunctionTester</h1>
      <h2>Function:</h2>
      <p>{ fn.toString() }</p>
      <PremadeTestList tests={ tests } fn={ fn } setErr={ (res) => {
        err.premade = !res;
        checkSyntax(err, tests, customTests, setSyntaxError);
      } } />
      <CustomTestList
        tests={ customTests }
        fn={ fn }
        editTest={
          (data) => {
            setTest(data);
            handleShow();
          }
        }
        deleteTest={
          (name) => {
            const updated = customTests.filter((item) => item.name !== name);
            if (updated.length === 0) updated.push({});
            changeCustomTests(updated);
            // customTests.splice(customTests.findIndex(item => item.name === name), 1);
          }
        }
        setErr={
          (res) => {
            err.custom = !res;
            checkSyntax(err, tests, customTests, setSyntaxError);
          }
        } />
      <div style={{ width: "65%", textAlign: "center", verticalAlign: "middle" }}>
        <Button
          name={ "AddCustomTestButton" }
          style={{ marginBottom: "16px" }}
          onClick={ () => {
            setTest({});
            handleShow();
          } }
        >
          Add custom test
        </Button>
        <br/>
        <Button
          name={ "OkButton" }
          style={{ backgroundColor: "green" } }
          disabled={ syntaxError }
          onClick={ () => onFinish({
            givenTests: tests.map(test => [test.name, test.testFn(fn)]),
            testResult: {
              achieved: doTests(tests, fn),
              all: Object.values(tests.map(test => test.points)).reduce((total, value) => total + value, 0)
            },
            customTests: []
          }) }
        > OK
        </Button>
        <CustomTestEditorModal modalData={ modalData } />
      </div>
    </>
  );
}

function checkSyntax(err, tests, customTests, fn) {
  if (tests[0].name === undefined) err.premade = false;
  if (customTests[0].name === undefined) err.custom = false;
  fn(err.premade || err.custom);
}

function doTests(tests, fn) {
  let result = 0;
  for (const test of tests) {
    if (test.testFn(fn)) {
      result += test.points;
    }
  }
  return result;
}
