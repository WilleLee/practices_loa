import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const handleClickDecrement = () => {
    setCount((prev) => {
      if (prev <= 0) return 0;
      return prev - 1;
    });
  };
  const handleClickIncrement = () => {
    setCount((prev) => {
      if (prev >= 10) return 10;
      return prev + 1;
    });
  };

  return { count, handleClickDecrement, handleClickIncrement };
};

export default useCounter;
