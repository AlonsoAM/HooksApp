import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del Alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del Poder",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1 className="text-center">
        TODO App: 10 - <small>pendientes: 2</small>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-md-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="¿Qué hay que hacer?"
            />
            <div className="d-grid gap-2 mt-2">
              <button className="btn btn-outline-primary " type="submit">
                Agregar TODO
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
