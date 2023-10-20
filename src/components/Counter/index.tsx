// hooks
import useCounter from "../../hooks/useCounter";

// styles
import styles from "./index.module.scss";

const Counter = () => {
  const { count, handleClickIncrement, handleClickDecrement } = useCounter();

  return (
    <div className={styles.wrapper}>
      <h1>Counter</h1>
      <div className={styles.content}>
        <p>
          Count: <span>{count}</span>
        </p>
        <div className={styles.buttonWrapper}>
          <button onClick={handleClickDecrement}>decrement</button>
          <button onClick={handleClickIncrement}>increment</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
