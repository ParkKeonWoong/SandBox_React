import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./useInput";

const App = () => {
  const sayHello = () => {
    console.log("hello");
  };

  const [bNumber, bSetNumber] = useState(0);
  const [aNumber, aSetNumber] = useState(0);

  useEffect(sayHello, [bNumber, aNumber]);

  return (
    <div className="App">
      <div> HI </div>
      <button
        onClick={() => {
          bSetNumber(bNumber + 1);
        }}
      >
        {bNumber}
      </button>
      <button
        onClick={() => {
          aSetNumber(aNumber + 1);
        }}
      >
        {aNumber}
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
