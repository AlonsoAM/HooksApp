import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };
    dispatchTodo(action);
  };

  return (
    <>
      <h1 className="text-center">
        TODO App: 10 - <small>pendientes: 2</small>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-md-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-md-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
