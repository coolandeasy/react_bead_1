import { CustomTest } from "./CustomTest.jsx";
import { Summary } from "./Summary.jsx";
import { Table } from "react-bootstrap";
import { useMemo, useRef, useState } from "react";

export function CustomTestList({ tests, fn, setErr, editTest, deleteTest }) {
  const testPoints = useMemo(() => {
    return tests.reduce((acc, obj) => {
      acc[obj.name] = 0;
      return acc;
    }, {});
  }, []);
  const testSyntax = useMemo(() => {
    return tests.reduce((syn, obj) => {
      syn[obj.name] = false;
      return syn;
    }, {});
  }, []);
  const [sum, setSum] = useState(0);
  const testRefs = useRef([]);
  const testAll = () => { testRefs.current.forEach((ref) => { if (ref) ref.click(); }); };
  const params = { tests, fn, testAll, testRefs, testPoints, testSyntax, setErr, setSum, sum, editTest, deleteTest };
  // console.log(tests)
  return (
    <>
      <h2>Custom Tests:</h2>
      <Table style={{ width: "65%", textAlign: "center", verticalAlign: "middle" }} striped hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Result</th>
          <th>Action</th>
          <th>Points</th>
        </tr>
        </thead>
        <tbody>
          { generateTableBody(params) }
        </tbody>
      </Table>
    </>
  );
}

function generateTableBody(params) {
  const {tests, fn, testAll, testRefs, testPoints, testSyntax, setErr, setSum, sum, editTest, deleteTest} = params;
  if (tests[0].name !== undefined) {
    const list = tests.map((test) => (
      <CustomTest key={test.name} test={test} fn={fn} editTest={ editTest } deleteTest={ deleteTest } ref={
        (el) => testRefs.current.push(el)
      } onFinish={
        (result) => {
          testSyntax[test.name] = result.res;
          checkSyntax(testSyntax, setErr);
          testPoints[test.name] = result.points;
          setSum(Object.values(testPoints).reduce((total, value) => total + value, 0));
        }} />
    ));
    list.push(<Summary key={ "summary" } sum={ sum } onTestAll={ (res) => { if (res) testAll(); }} />);
    return list;
  }
  return <tr><td colSpan={4}><h6>No custom tests are available. Add some!</h6></td></tr>;
}

function checkSyntax(dict, fn) {
  // console.log(dict);
  // console.log(Object.keys(dict).every(function(k){ return dict[k] === true }));
  fn(Object.keys(dict).every(function(k){ return dict[k] === true }));
}