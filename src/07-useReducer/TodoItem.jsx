/* eslint-disable react/prop-types */

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  const handleRemoveTodo = () => onRemoveTodo(todo.id);

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          onClick={() => onToggleTodo(todo.id)}
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          }`}
        >
          {todo.description}
        </span>
        <button className="btn btn-danger" onClick={handleRemoveTodo}>
          <i className="bi bi-trash"></i>
        </button>
      </li>
    </>
  );
};
