import { useState } from "react";
import "../useStateHook/style.css";
const UseState = () => {
  // useState with object;
  const [count, setCount] = useState({ num: 0, id: "abcd" });

  return (
    <div className="react-hook-div">
      {/* updater function is used for state change where the current state is dependent on the previous state. As given below:*/}
      <button
        className="incrementBtn"
        onClick={() =>
          setCount((prevState) => {
            return { ...prevState, num: prevState.num + 5 };
          })
        }
      >
        +
      </button>
      <h3>{count.num}</h3>
      {/* state can be set / update directly but we will not get updated state immediately. */}
      <button
        className="decrementBtn"
        onClick={() =>
          setCount((prevState) => {
            return { ...prevState, num: prevState.num - 5 };
          })
        }
      >
        -
      </button>
    </div>
  );
};
export default UseState;
