"use client";
import { cookies } from "next/headers";
import { RecipeSearch } from "@/components/recipe-search";
import { RecipesDisplay } from "@/components/recipes-display";
import { useState } from "react";

export default function Index() {
  const [recipeData, setRecipeData] = useState<any[] | never[]>([]);

  return (
    <div className="w-full">
      <RecipeSearch setRecipeData={setRecipeData} />
      <RecipesDisplay recipeData={recipeData} />
    </div>
  );
}
