/* eslint-disable react/prop-types */

import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onRemoveTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          // TODOItem
          <TodoItem
            todo={todo}
            key={todo.id}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};
