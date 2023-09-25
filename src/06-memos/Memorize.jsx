import { useState } from "react";
import { useCounter } from "../01-useState/hooks/useCounter.js";
import { Small } from "./Small";

export const Memorize = () => {
  const { Counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
      <h1 className="text-center">
        Counter: <Small value={Counter} />
      </h1>
      <hr />
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
