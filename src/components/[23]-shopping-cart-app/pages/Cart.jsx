import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductTile from "../components/ProductTile";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalCart = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      {cart?.length ? (
        <>
          <div className="min-h-[80vh] grid sm:grid-cols-2 max-w-6xl mx-auto p-3 gap-3">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((product, index) => (
                <ProductTile key={index} product={product} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14 border">
              <h1 className="font-bold">Your Cart Summary</h1>
              <p>
                <span className="text-grey-800 font-bold">Total Item</span>
                <span>: {cart?.length}</span>
              </p>
              <p>
                <span className="text-grey-800 font-bold">Total Amount</span>
                <span>: {totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1>Your cart is empty!</h1>
          <Link to={"/shopping-cart"}>
            <button>Shop now!</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
