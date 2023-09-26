/* eslint-disable react/prop-types */

import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: inputValue,
      done: false,
    };
    onNewTodo(newTodo);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="¿Qué hay que hacer?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="d-grid gap-2 mt-2">
          <button className="btn btn-outline-primary " type="submit">
            Agregar TODO
          </button>
        </div>
      </form>
    </>
  );
};
