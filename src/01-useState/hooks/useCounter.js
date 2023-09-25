import { useState } from "react";

export const useCounter = (value = 1) => {
  const [Counter, setCounter] = useState(value);

  const reset = () => setCounter(value);
  const increment = () => setCounter(Counter + 1);
  const decrement = () => {
    if (Counter === 0) return;
    setCounter(Counter - 1);
  };

  return {
    Counter,
    increment,
    decrement,
    reset,
  };
};
