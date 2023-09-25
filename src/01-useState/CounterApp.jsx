import { useState } from "react";

export const CounterApp = () => {
  const [Counter, setCounter] = useState(10);

  return (
    <>
      <h1>Counter: {Counter}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setCounter(Counter + 1)}
      >
        +1
      </button>
    </>
  );
};
