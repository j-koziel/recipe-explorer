"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import getRecipeData from "@/utils/getRecipeData";
import RecipeCard from "@/components/RecipeCard";

export default function Index() {
  const [recipeQuery, setRecipeQuery] = useState<string>("");
  const [recipeData, setRecipeData] = useState<any[] | []>([]);

  return (
    <div className="flex-1 flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <h1>Welcome to recipe explorer</h1>
      </div>
      <form
        onSubmit={async (e: FormEvent<HTMLElement>) => {
          e.preventDefault();
          const data = await getRecipeData(recipeQuery);
          setRecipeData(data);
        }}
        className="animate-in flex flex-col gap-4 items-center w-screen"
      >
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setRecipeQuery(e.target.value);
          }}
          value={recipeQuery}
          placeholder="Pizza? Or maybe some lasagna? Make your pick..."
          className="w-1/2 text-center rounded-md h-7 bg-inherit border"
          autoFocus
        />
        <button className="bg-green-700 w-fit p-2 rounded-md" type="submit">
          Search for a recipe
        </button>
      </form>
      <div className="flex items-center gap-4">
        {recipeData.map((recipeObj, i) => {
          if (i >= 2) {
            return <RecipeCard recipeObj={recipeObj} key={i} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
