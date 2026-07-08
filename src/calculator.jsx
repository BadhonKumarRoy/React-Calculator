import React, { useState } from "react";

import "./styles/calculator.css";

const Calculator = () => {
  
  const [display, setDisplay] = useState("0");
  // const [operand, setOperand] = useState(null);
  const [lastInput, setLastInput] = useState("");
  const [expression, setExpression] = useState("");
  // const operators = ["+", "-", "*", "/", ".", "%"];

  const inputDigit = (digit) => {
    setDisplay(display === "0" ? digit : display + digit);
    setExpression(expression + digit);
    setLastInput("number");
  };

  const inputOperator = (operator) => {
    if (lastInput === "operator") {
      return;
    }
    setDisplay(display + operator);
    setExpression(expression + operator);
    setLastInput("operator");
  };

  const performOperation = () => {
    try {
      const result = eval(expression);
      setDisplay(result.toString());
      setExpression(result.toString());
      setLastInput("number");
    }
    catch {
      setDisplay("Error");
      setExpression("");
      setLastInput("");
    }
  };

  const del = () => {
    if(display == "0") return;
    if(display.length === 1) {
      setDisplay("0");
      setExpression("");
      setLastInput("");
      return;
    }
    if (lastInput === "operator") {
      setLastInput("number");
    }
    setDisplay(display.slice(0, -1));
  };
  const clearDisplay = () => {
    setDisplay("0");
    setExpression("");
    setLastInput("");
  };

  return (
    <div className="calculator">
      <div className="calculator-display"></div>
        <input id="display" readOnly value={display} />
      <div id="keys" className="keys">
        {/* row1 */}
        <button className="left_col" id="number" onClick={() => inputDigit("7")}>
          7
        </button>
        <button className="left_col" id="number" onClick={() => inputDigit("8")}>
          8
        </button>
        <button className="left_col" id="number" onClick={() => inputDigit("9")}>
          9
        </button>
        <button
          className="forth_col"
          id="del"
          onClick={() => {
            del();
          }}
        >
          Del
        </button>
        <button className="fifth_col" id="ac" onClick={clearDisplay}>
          AC
        </button>
        <button className="left_col" id="number" onClick={() => inputDigit("4")}>
          4
        </button>
        <button className="left_col" id="number" onClick={() => inputDigit("5")}>
          5
        </button>
        <button className="left_col" id="number" onClick={() => inputDigit("6")}>
          6
        </button>
        <button className="forth_col" id="operator" onClick={() => inputOperator("×")}>
          ×
        </button>
        <button className="fifth_col" id="operator" onClick={() => inputOperator("÷")}>
          ÷
        </button>
        {/* row2 */}
        <button className="left_col" id="number" onClick={() => inputDigit("1")}>
          1
        </button>
        <button className="left_col" id="number" onClick={() => inputDigit("2")}>
          2
        </button>
        <button className="left_col" id="number" onClick={() => inputDigit("3")}>
          3
        </button>
        <button className="forth_col" id="works" onClick={() => inputOperator("+")}>
          +
        </button>
        <button className="fifth_col" id="works" onClick={() => inputOperator("-")}>
          -
        </button>
        <button className="left_col" id="number" onClick={() => inputDigit("0")}>
          0
        </button>
        <button className="left_col" id="operator" onClick={() => inputDigit(".")}>
          .
        </button>
        <button className="left_col" id="operator" onClick={() => inputOperator("x10")}>
          x10
        </button>
        <button className="forth_col" id="operator" onClick={() => inputOperator("%")}>
          %(Ans)
        </button>
        <button className="fifth_col" id="works" onClick={() => performOperation()}>=</button>
        
        {/* row3 */}
        {/* row4 */}
        {/* row5 */}
      </div>
    </div>
  );
};

export default Calculator;
