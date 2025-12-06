import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between h-20 max-w-6xl mx-8">
      <NavLink to={"/shopping-cart"}>
        <h1 className="text-green-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
          Shopping Cart
        </h1>
      </NavLink>
      <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
        <li className="cursor-pointer">
          <NavLink to={"/shopping-cart"}>Home </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to={"/shopping-cart/cart"}>Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
