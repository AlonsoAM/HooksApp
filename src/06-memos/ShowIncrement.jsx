/* eslint-disable react/prop-types */
export const ShowIncrement = ({ increment }) => {
  console.log("Me volví a generar :c");
  return (
    <>
      <button className="btn btn-primary" onClick={() => increment()}>
        Incrementar
      </button>
    </>
  );
};
