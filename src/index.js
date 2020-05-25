import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>lorem ipsum llalal </p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
