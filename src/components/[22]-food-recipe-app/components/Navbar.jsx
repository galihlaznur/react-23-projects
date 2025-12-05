import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import FoodRecipeContext from "../context/FoodRecipeContext";

const Navbar = () => {
  const { query, setQuery, handleSubmit } = useContext(FoodRecipeContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink
        to={"/food-recipe"}
        className="text-black hover:text-gray-700 duration-300"
      >
        <h2 className="text-2xl font-semibold">FoodRecipe</h2>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none border lg:w-96 shadow-lg shadow-green-100 focus:shadow-green-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/food-recipe"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/food-recipe/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
