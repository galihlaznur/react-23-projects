import React, { useState } from "react";
import FoodRecipeContext from "./FoodRecipeContext";
import { useNavigate } from "react-router-dom";

const FoodRecipeProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );
      if (!response.ok) {
        throw new Error(`Gagal mengambil data resep: ${response.status}`);
      }

      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        navigate("/food-recipe");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  const handleAddToFavorite = (getCurrentItem) => {
    let cpy = [...favoritesList];
    const index = cpy.findIndex((item) => item.id === getCurrentItem.id);
    if (index === -1) {
      cpy.push(getCurrentItem);
    } else {
      cpy.splice(index, 1);
    }

    setFavoritesList(cpy);
  };

  return (
    <FoodRecipeContext.Provider
      value={{
        query,
        setQuery,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList,
        handleAddToFavorite,
      }}
    >
      {children}
    </FoodRecipeContext.Provider>
  );
};

export default FoodRecipeProvider;
