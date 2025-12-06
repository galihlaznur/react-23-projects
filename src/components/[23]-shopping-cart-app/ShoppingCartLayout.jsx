import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const ShoppingCartLayout = () => {
  return (
    <div className="min-w-screen min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingCartLayout;
