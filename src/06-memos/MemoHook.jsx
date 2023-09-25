import { useMemo, useState } from "react";
import { useCounter } from "../01-useState/hooks/useCounter.js";

const heavyStuff = (iterator) => {
  for (let i = 0; i < iterator; i++) {
    console.log("Ahí vamos...");
  }

  return `${iterator} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { Counter, increment } = useCounter();
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(Counter), [Counter]);

  return (
    <>
      <h1 className="text-center">
        Counter: <small>{Counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-warning ms-2"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}{" "}
      </button>
    </>
  );
};
