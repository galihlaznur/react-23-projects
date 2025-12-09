import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const FoodRecipeLayout = () => {
  return (
    <div className="min-w-[80vw] min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default FoodRecipeLayout;
