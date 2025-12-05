import React, { useContext } from "react";
import FoodRecipeContext from "../context/FoodRecipeContext";
import RecipeItem from "../components/RecipeItem";

const Home = () => {
  const { loading, recipeList } = useContext(FoodRecipeContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList?.length ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <p className="lg:text-4xl text-xl text-center text-black font-semibold">
          Nothing to show please search something
        </p>
      )}
    </div>
  );
};

export default Home;
