import { useCallback, useState, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const memoizedIncrement = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  useEffect(() => {
    memoizedIncrement;
  }, [memoizedIncrement]);

  // const increment = () => setCounter(counter + 1);

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={memoizedIncrement} />
    </>
  );
};
