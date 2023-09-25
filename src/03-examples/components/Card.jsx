/* eslint-disable react/prop-types */

import { useLayoutEffect, useRef, useState } from "react";

export const Card = ({ data }) => {
  const pRef = useRef();
  const [boxsize, setBoxsize] = useState({ width: 0, height: 0 });

  const { brand, description, category, price, stock, thumbnail, title } =
    !!data && data;

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    // console.log(pRef.current.getBoundingClientRect());
    setBoxsize({ width, height });
  }, [data]);
  return (
    <>
      <div className="card" style={{ display: "flex" }}>
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p ref={pRef} className="card-text">
            {description}
          </p>
          <hr />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Marca</th>
                <th scope="col">Categoría</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{brand}</th>
                <td>{category}</td>
                <td>US$ {price}</td>
                <td>{stock}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <code>{JSON.stringify(boxsize)}</code>
    </>
  );
};
