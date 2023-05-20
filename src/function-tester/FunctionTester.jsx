import { PremadeTestList } from "./PremadeTestList.jsx";
import { CustomTestList } from "./CustomTestList.jsx";
import { useState } from "react";

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  const err = {premade: true, custom: true};
  const [syntaxError, setSyntaxError] = useState(true);
  return (
    <>
      <h1>FunctionTester</h1>
      <h2>Function:</h2>
      <p>{fn.toString()}</p>
      <PremadeTestList tests={ tests } fn={ fn } setErr={ (res) => {
        err.premade = !res;
        checkSyntax(err, setSyntaxError);
      } } />
      <CustomTestList tests={ tests } fn={ fn } input={ input } output={ output } setErr={
        (res) => {
        err.custom = !res;
        checkSyntax(err, setSyntaxError);
      } } />
      <button
        disabled={ syntaxError }
        onClick={ () => onFinish({
          givenTests: tests.map(test => [test.name, test.testFn(fn)]),
          testResult: {
            achieved: doTests(tests, fn),
            all: Object.values(tests.map(test => test.points)).reduce((total, value) => total + value, 0)
          },
          customTests: []
        })}
      > OK
      </button>
    </>
  );
}

function checkSyntax(err, fn) {
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
