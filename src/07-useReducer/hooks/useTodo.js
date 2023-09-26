import { useReducer, useEffect } from "react";
import { todoReducer } from "../todoReducer";

const initialState = [];

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  const totalTodos = todos.length;

  const totalPendientes = todos.filter((todo) => !todo.done).length;

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

  const handleRemoveTodo = (id) => {
    const action = {
      type: "remove",
      payload: id,
    };
    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "toggle",
      payload: id,
    };
    dispatchTodo(action);
  };
  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    totalTodos,
    totalPendientes,
  };
};
