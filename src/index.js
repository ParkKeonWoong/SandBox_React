import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./useInput";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return {
    title: title,
    setTitle: setTitle
  };
};

const App = () => {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => titleUpdater.setTitle("home"), 5000);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
