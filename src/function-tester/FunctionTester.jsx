import { PremadeTestList } from "./PremadeTestsList.jsx"

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  console.log(fn);
  console.log(input);
  console.log(output);
  console.log(tests);
  return (
    <>
      <h1>FunctionTester</h1>
      <h2>Function:</h2>
      <p>{fn.toString()}</p>
      <PremadeTestList
        tests={tests}

      />
      <button
        onClick={() =>
          onFinish({
            givenTests: tests.map(test => [test.name, test.testFn(fn)]),
            testResult: { achieved: doTests(tests, fn), all: 100 },
            customTests: [],
          })
        }
      >
        OK
      </button>
    </>
  );
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
