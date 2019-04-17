import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import useAsyncCallback from "./useAsyncCallback";

function App() {
  const [frst, frstToggle] = useState(true);
  const [scnd, scndToggle] = useState(true);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => frstToggle(!frst)}>Toggle Frst{frst}</button>
      <button onClick={() => scndToggle(!scnd)}>Toggle Scnd {frst}</button>
      <div>{frst ? <CounterA /> : <CounterA />}</div>
      <div>{scnd ? <CounterB /> : <CounterC />}</div>
    </div>
  );
}

class CounterA extends React.Component {
  state = { count: 0 };
  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  render() {
    const count = this.state.count;
    return <button onClick={this.increment}>Click me {count}</button>;
  }
}

function CounterB() {
  const [counter, setCounter] = useState(0);
  const setCounterAsync = useAsyncCallback(setCounter);
  return (
    <button
      onClick={() =>
        setTimeout(() => {
          setCounterAsync(counter => counter + 1);
        }, 1500)
      }
    >
      PEPA {counter}
    </button>
  );
}

const CounterC = () => CounterB();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
