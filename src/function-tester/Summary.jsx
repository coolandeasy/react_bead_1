import { Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import React, { useState } from "react";

export function Summary({ sum, onTestAll }) {
  const [points, setPoints] = useState(sum);
  React.useEffect(() => {
    setPoints(sum);
  }, [sum]);
  return (
    <tr>
      <td></td>
      <td></td>
      <td>
        <Button style={{ width: "65%" }} onClick={ () => onTestAll(true) }>
          Run All <FaPlay style={{ paddingLeft: "4px" }} />
        </Button>
      </td>
      <td>SUM: { points }</td>
    </tr>
  );
}