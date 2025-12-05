import React, { useContext } from "react";
import FoodRecipeContext from "../context/FoodRecipeContext";
import RecipeItem from "../components/RecipeItem";

const Favorites = () => {
  const { favoritesList } = useContext(FoodRecipeContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList?.length ? (
        favoritesList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <p className="lg:text-4xl text-xl text-center text-black font-semibold">
          Nothing is added
        </p>
      )}
    </div>
  );
};

export default Favorites;
