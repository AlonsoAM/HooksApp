import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "./hooks/useTodo.js";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    totalTodos,
    totalPendientes,
  } = useTodo();

  return (
    <>
      <h1 className="text-center">
        TODO App: {totalTodos} - <small>pendientes: {totalPendientes}</small>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-md-7">
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
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
