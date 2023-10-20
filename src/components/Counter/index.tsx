import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClickDecrement = () => {
    setCount((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });
  };
  const handleClickIncrement = () => {
    setCount((prev) => {
      if (prev === 10) return 10;
      return prev + 1;
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <p>Count: {count}</p>
        <div>
          <button onClick={handleClickDecrement}>decrement</button>
          <button onClick={handleClickIncrement}>increment</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
