import React, { useState } from "react";
import "./index.css"; // Import the CSS file

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleNumberClick = (num) => {
    if (operator) {
      setNum2(num2 + num);
    } else {
      setNum1(num1 + num);
    }
    setDisplay(display + num);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setDisplay(display + op);
  };

  const handleEqualsClick = () => {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      case "%":
        result = parseFloat(num1) % parseFloat(num2);
        break;
      default:
        result = "";
    }
    setDisplay(result.toString());
    setNum1("");
    setNum2("");
    setOperator("");
  };

  const handleClearClick = () => {
    setDisplay("");
    setNum1("");
    setNum2("");
    setOperator("");
  };

  const handleCancelClick = () => {
    if (num2) {
      setNum2(num2.slice(0, -1));
      setDisplay(display.slice(0, -1));
    } else if (operator) {
      setOperator("");
      setDisplay(display.slice(0, -1));
    } else if (num1) {
      setNum1(num1.slice(0, -1));
      setDisplay(display.slice(0, -1));
    }
  };

  const handleSquareRootClick = () => {
    const result = Math.sqrt(parseFloat(display));
    setDisplay(result.toString());
    setNum1(result.toString());
    setNum2("");
    setOperator("");
  };

  return (
    <div className="calculator">
      <div className="display">{display}<br/><br/></div>
      <div className="keys">
        <button className="clear" onClick={handleClearClick}>AC</button>
        <button className="operator" onClick={handleSquareRootClick}>√</button>
        <button className="operator" onClick={() => handleOperatorClick("%")}>%</button>
        <button className="operator" onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button className="operator" onClick={() => handleOperatorClick("*")}>X</button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button className="operator" onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button className="operator" onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleNumberClick("0")}>0</button>
        <button onClick={() => handleNumberClick(".")}>.</button>
        <button className="cancel" onClick={handleCancelClick}>⌫</button>
        <button className="operator" onClick={handleEqualsClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
