import { useFetch } from "../03-examples/hooks/useFetch";
import { useCounter } from "../01-useState/hooks/useCounter";
import { Card } from "../03-examples/components/Card";
export const Layout = () => {
  const { Counter, increment, decrement } = useCounter();
  const { data, isLoading } = useFetch(
    `https://dummyjson.com/products/${Counter}`
  );

  return (
    <>
      <h1 className="text-center">Fake Store</h1>
      <hr />
      <div className="container flex align-content-center justify-content-center">
        {isLoading ? (
          <div className="alert alert-info text-center">Loading...</div>
        ) : (
          <Card data={data} />
        )}

        <div className="text-center">
          <div
            className="btn-group mt-2"
            role="group"
            aria-label="Basic example"
          >
            <button
              disabled={isLoading || Counter <= 1}
              className="btn btn-secondary"
              type="button"
              onClick={decrement}
            >
              Previous Product
            </button>
            <button
              disabled={isLoading}
              className="btn btn-primary"
              type="button"
              onClick={increment}
            >
              Next Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
