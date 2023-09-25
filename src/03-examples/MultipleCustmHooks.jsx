import { useFetch } from "./hooks/useFetch";

export const MultipleCustmHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://fakestoreapi.com/products"
  );

  console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>Fake Store API</h1>
      <hr />
    </>
  );
};
