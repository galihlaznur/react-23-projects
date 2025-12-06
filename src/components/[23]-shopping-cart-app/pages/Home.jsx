import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/ProductTile";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`Gagal mengambil data ${response.status}`);
      }
      const data = await response.json();
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Circles
          height={"120"}
          width={"120"}
          color="rgb(120, 255, 255)"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3 gap-3">
      {products?.length
        ? products.map((product, index) => (
            <ProductTile key={index} product={product} />
          ))
        : null}
    </div>
  );
};

export default Home;
