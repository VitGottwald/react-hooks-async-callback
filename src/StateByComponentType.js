import React, { useState } from "react";
import useAsyncCallback from "./useAsyncCallback";

const StateByComponentType = () => {
  const [frst, frstToggle] = useState(true);
  const [scnd, scndToggle] = useState(true);

  return (
    <div>
      <button onClick={() => frstToggle(!frst)}>Toggle Frst {frst}</button>
      <button onClick={() => scndToggle(!scnd)}>Toggle Scnd {frst}</button>
      <div>{frst ? <InstantButton /> : <InstantButton />}</div>
      <div>{scnd ? <DelayedButton /> : <AnotherDelayed />}</div>
    </div>
  );
};

class InstantButton extends React.Component {
  state = { count: 0 };
  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  render() {
    const count = this.state.count;
    return <button onClick={this.increment}>Frst (instant) {count}</button>;
  }
}

function DelayedButton() {
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
      Scnd (delayed) {counter}
    </button>
  );
}

const AnotherDelayed = () => DelayedButton();

export default StateByComponentType;
