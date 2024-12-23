import React, { Fragment, useState } from "react";
import "./index.css";
import { stringCalculator } from "../../utils/helper/executor";

export default function Calculator() {
  const [expression, setExpression] = useState<string>("");
  const [isError, setIsError] = useState<string>("");
  const [resultOfExpression, setResultOfExpression] = useState<number>(0);
  const handleCalculation = () => {
    try {
      const result  = stringCalculator(expression);
      setResultOfExpression(result);
    } catch (error) {
      setIsError('Only positive number valid"');
      console.error(error);
    }
  };

  return (
    <Fragment>
      <h2 className="title">String Calculator</h2>

    <div className="wrapper">
      <div className="input-control">
        <label>Expression: </label>
        <input
          value={expression}
          onChange={(e) => {
            setExpression(e.target.value);
          }}
        />
        <button onClick={handleCalculation}>Calculate</button>
      </div>
      {isError ? (
        <div>{isError} </div>
      ) : (
        <div className="input-control">
          <h4>Result:</h4>
          <span>{resultOfExpression}</span>
        </div>
      )}
    </div>
    </Fragment>
  );
}
