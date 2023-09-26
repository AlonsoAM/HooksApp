/* eslint-disable react/prop-types */

import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          // TODOItem
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};
