"use client";
import { Button, Input } from "@nextui-org/react";
import { getRecipesByTextQuery } from "@/utils/edamam-api/get-recipes";
import { useState, Dispatch, SetStateAction } from "react";

export function RecipeSearch({
  setRecipeData,
}: {
  setRecipeData: Dispatch<SetStateAction<any[]>>;
}) {
  const [recipeQuery, setRecipeQuery] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const data = await getRecipesByTextQuery(recipeQuery);
        setRecipeData(data.hits);
      }}
      className="flex flex-col items-center gap-4"
    >
      <Input
        type="text"
        placeholder="Find your favourite recipe"
        description="Over 2.3 million recipes available!"
        value={recipeQuery}
        onChange={(e) => {
          setRecipeQuery(e.target.value);
        }}
        className="w-1/2 md:w-1/6"
      />
      <Button type="submit">Get recipes</Button>
    </form>
  );
}
