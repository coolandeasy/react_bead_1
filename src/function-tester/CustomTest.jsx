import { useState, forwardRef } from "react";
import { Button } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import { BsCircle, BsCheck2Circle, BsFillExclamationCircleFill } from "react-icons/bs";

export const CustomTest = forwardRef(({ test, fn, onFinish }, ref) => {
  let testResult = false;
  const [result, setResult] = useState(<BsCircle size={'1.62em'}/>);
  const [points, setPoints] = useState(0);
  return (
    <tr>
      <td>{ test.name }</td>
      <td>{ result }</td>
      <td>
        <Button ref={ ref } style={{ backgroundColor: "unset", border: "unset" }} onClick={ () => {
          testResult = DoTest(test, fn, onFinish);
          if (testResult) {
            setPoints(test.points);
            setResult(<BsCheck2Circle size={"2em"} style={{color: "green"}}/>)
          } else {
            setPoints(0);
            setResult(<BsFillExclamationCircleFill size={"2em"} style={{color: "red"}}/>)
          }
        }}>
          <FaPlayCircle size={"2em"} style={{ color: "blue" }} /></Button>
      </td>
      <td>{ points }</td>
    </tr>
  );
});

CustomTest.displayName = 'CustomTest';

export function DoTest(test, fn, onFinish) {
  const res = test.testFn(fn);
  onFinish({points: res ? test.points : 0, res: res});
  return res;
}