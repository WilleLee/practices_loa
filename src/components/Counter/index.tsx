import useCounter from "../../hooks/useCounter";

const Counter = () => {
  const { count, handleClickIncrement, handleClickDecrement } = useCounter();

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
