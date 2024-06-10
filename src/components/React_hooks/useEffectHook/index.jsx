import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState();

  //   empty dependency array [] === runs on first render;
  useEffect(() => {
    console.log("On first render");
    setCount(10);
  }, []);

  //   no dependency array === runs on every render;
  useEffect(() => {
    console.log("On every render");
  });

  //   dependency array with a variable === runs on first render and on change of that variable;
  useEffect(() => {
    console.log("on change of count");
  }, [count]);

  return (
    <div>
      <button
        className="incrementBtn"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <h3>{count}</h3>
      <button
        className="decrementBtn"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
    </div>
  );
};
export default UseEffect;
