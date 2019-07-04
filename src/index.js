import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import StateByComponentType from "./StateByComponentType";
import Keys from "./keys";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <StateByComponentType />
      <Keys />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
