import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="group flex flex-col items-center border-2 border-green-950 gap-3 p-4 h-[400px] mt-10 rounded-xl">
      <div className="h-[180px]">
        <img
          className="object-cover h-full w-full"
          src={product?.image}
          alt={product?.title}
        />
      </div>
      <div>
        <h1 className="w-40 truncate mt-3 text-gray-900 font-bold text-lg">
          {product?.title}
        </h1>
        <p>{product?.price}</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <button
          onClick={
            cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="bg-green-950 text-white border-2 rounded-lg font-bold p-4"
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from cart"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductTile;
