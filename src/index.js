import React, { useState } from "react";
import ReactDOM from "react-dom";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr. Park");

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
