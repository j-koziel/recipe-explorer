"use client";
import { RecipeSearch } from "@/components/recipe-search";
import { RecipesDisplay } from "@/components/recipes-display";
import { useState } from "react";

export default function Index() {
  const [recipeData, setRecipeData] = useState<any[] | never[]>([]);

  return (
    <div className="w-full">
      <h1 className="text-center text-4xl m-4">Search millions of recipes</h1>
      <RecipeSearch setRecipeData={setRecipeData} />
      <RecipesDisplay recipeData={recipeData} />
    </div>
  );
}
