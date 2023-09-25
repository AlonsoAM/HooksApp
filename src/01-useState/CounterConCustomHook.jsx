import { useCounter } from "./hooks/useCounter";

export const CounterConCustomHook = () => {
  const { Counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter con Hook: {Counter} </h1>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
    </>
  );
};
