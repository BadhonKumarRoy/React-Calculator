import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const inputDigit = (digit) => {
    setDisplay(display === "0" ? digit : display + digit);
  };
  const clearDisplay = () => {
    setDisplay("0");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input id="display" readOnly value={display} />
        <div id="keys">
          <button id="functions" onClick={clearDisplay}>
            AC
          </button>
          <button id="functions" onClick={() => setDisplay(display.slice(0, -1))}>
            Del
          </button>
          <button id="operator" onClick={() => inputDigit("+")}>
            +
          </button>
          <button id="number" onClick={() => inputDigit("1")}>
            1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
