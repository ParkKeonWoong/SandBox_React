import React, { useState } from "react";
import "./styles.css";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
};

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" />
    </div>
  );
};

export default App();
