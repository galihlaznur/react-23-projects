import React from "react";
import useFetch from "./useFetch";

const UseFetchHookTest = () => {
  const [data, pending, error] = useFetch("https://dummyjson.com/products", {});

  return (
    <div>
      <h1>UseFetch Hook Test</h1>
      {pending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.products?.length && (
        <ul>
          {data.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseFetchHookTest;
