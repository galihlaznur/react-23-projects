import React, { useEffect, useState } from "react";
import style from "./loadmoredata.module.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        if (data && data.products && data.products.length) {
          // data?.products?.length nulisnya bisa gini juga buat kondisinya
          setProducts((prevProducts) => [...prevProducts, ...data.products]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style["load-more-container"]}>
      <div className={style["product-container"]}>
        {products && products.length ? (
          products.map((product, index) => (
            <div key={index} className={style.product}>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <div className={style["button-container"]}>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
      {
        disableButton && <p>You have reached the maximum number of products.</p>
      }
    </div>
  );
};

export default LoadMoreData;
