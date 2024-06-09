import { useState } from "react";
import "../React_hooks/style.css";

const ReactHooks = () => {
  const [count, setCount] = useState(0);

  console.log(count,55);
  return (
    <div className="react-hook-div">
      {/* updater function is used for state change where the current state is dependent on the previous state. As given below:*/}
      <button
        className="incrementBtn"
        onClick={() => setCount((prevState) => prevState + 3)}
      >
        +
      </button>
      <h3>{count}</h3>
      {/* state can be set / update directly but we will not get updated state immediately. */}
      <button className="decrementBtn" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};
export default ReactHooks;
