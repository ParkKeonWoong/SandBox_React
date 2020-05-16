import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
