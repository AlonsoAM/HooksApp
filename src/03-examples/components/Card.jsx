/* eslint-disable react/prop-types */

export const Card = ({ data }) => {
  const { brand, description, category, price, stock, thumbnail, title } =
    !!data && data;
  return (
    <>
      <div className="card">
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
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
    </>
  );
};
