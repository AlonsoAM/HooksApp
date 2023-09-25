import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  useEffect(() => {
    // console.log("formState cambio");
  }, [formState]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => {
          setFormState({
            ...formState,
            username: e.target.value,
          });
        }}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@correo.com"
        name="email"
        value={email}
        onChange={(e) => {
          setFormState({
            ...formState,
            email: e.target.value,
          });
        }}
      />

      {username === "alonsoam" && <Message />}
    </>
  );
};
