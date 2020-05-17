import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./useInput";

const content = [
  {
    tab: "Section 1",
    content: "I'm the Content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the Content of the Section 2"
  },
  {
    tab: "Section 3",
    content: "I'm the Content of the Section 3"
  }
];

const useTaps = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTaps(1, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
