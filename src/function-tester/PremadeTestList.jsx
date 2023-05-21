import { PremadeTest } from "./PremadeTest.jsx";
import { Summary } from "./Summary.jsx";
import { Table } from "react-bootstrap";
import { useMemo, useRef, useState } from "react";

export function PremadeTestList({ tests, fn, setErr }) {
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
  return (
    <>
      <h2>Premade Tests:</h2>
      <div></div>
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
        {tests.map((test) => (
          <PremadeTest key={ test.name } test={ test } fn={ fn } ref={
            (el) => testRefs.current.push(el)
          } onFinish={
            (result) => {
              testSyntax[test.name] = result.res;
              checkSyntax(testSyntax, setErr);
              testPoints[test.name] = result.points;
              setSum(Object.values(testPoints).reduce((total, value) => total + value, 0));
            }} />
        ))}
        <Summary sum={ sum } onTestAll={ (res) => { if (res) testAll(); }} />
        </tbody>
      </Table>
    </>
  );
}

function checkSyntax(dict, fn) {
  // console.log(dict);
  // console.log(Object.keys(dict).every(function(k){ return dict[k] === true }));
  fn(Object.keys(dict).every(function(k){ return dict[k] === true }));
}