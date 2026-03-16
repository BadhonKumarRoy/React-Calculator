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
      <div className="calculator-display">
        <input id="display" readOnly value={display} />
      </div>
      <div id="keys">
        {/* row1 */}
        <button id="works" onClick={clearDisplay}>
          AC
        </button>
        <button
          id="works"
          onClick={() => {
            del();
          }}
        >
          Del
        </button>
        <button id="operator" onClick={() => inputOperator("%")}>
          %
        </button>
        <button id="operator" onClick={() => inputOperator("÷")}>
          ÷
        </button>
        {/* row2 */}
        <button id="number" onClick={() => inputDigit("7")}>
          7
        </button>
        <button id="number" onClick={() => inputDigit("8")}>
          8
        </button>
        <button id="number" onClick={() => inputDigit("9")}>
          9
        </button>
        <button id="operator" onClick={() => inputOperator("×")}>
          ×
        </button>
        {/* row3 */}
        <button id="number" onClick={() => inputDigit("4")}>
          4
        </button>
        <button id="number" onClick={() => inputDigit("5")}>
          5
        </button>
        <button id="number" onClick={() => inputDigit("6")}>
          6
        </button>
        <button id="operator" onClick={() => inputOperator("-")}>
          -
        </button>
        {/* row4 */}
        <button id="number" onClick={() => inputDigit("1")}>
          1
        </button>
        <button id="number" onClick={() => inputDigit("2")}>
          2
        </button>
        <button id="number" onClick={() => inputDigit("3")}>
          3
        </button>
        <button id="works" onClick={() => inputOperator("+")}>
          +
        </button>
        {/* row5 */}
        <button className="zero" onClick={() => inputDigit("0")}>
          0
        </button>
        <button id="number" onClick={() => inputDigit(".")}>
          .
        </button>
        <button id="function" onClick={() => performOperation()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
