import { useState, forwardRef } from "react";
import { Button } from "react-bootstrap";
import { FaPlayCircle, FaEdit } from "react-icons/fa";
import { BsCircle, BsCheck2Circle, BsFillExclamationCircleFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";

export const CustomTest = forwardRef((params, ref) => {
  const { test, fn, onFinish, editTest, deleteTest } = params;
  let testResult = false;
  const [result, setResult] = useState(<BsCircle size={'1.62em'}/>);
  const [points, setPoints] = useState(0);
  const btnStyle = { backgroundColor: "unset", border: "unset", padding: "0 4px 0 4px" };
  return (
    <tr>
      <td>{ test.name }</td>
      <td>{ result }</td>
      <td>
        <Button name={ "doTest" } ref={ ref } style={ btnStyle } onClick={ () => {
          testResult = DoTest(test, fn, onFinish);
          if (testResult) {
            setPoints(test.points);
            setResult(<BsCheck2Circle size={"2em"} style={{color: "green"}}/>)
          } else {
            setPoints(0);
            setResult(<BsFillExclamationCircleFill size={"2em"} style={{color: "red"}}/>)
          }
        }}>
          <FaPlayCircle size={"2em"} style={{ color: "blue" }} />
        </Button>
        <Button name={ "editTest" } style={ btnStyle } onClick={ () => { editTest(test); }}>
          <FaEdit size={"1.8em"} style={{ color: "blue" }} />
        </Button>
        <Button name={ "deleteTest" } style={ btnStyle } onClick={ () => { deleteTest(test.name); }}>
          <RiDeleteBin2Fill size={"1.8em"} style={{ color: "red" }} />
        </Button>
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