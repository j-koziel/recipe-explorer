import { RecipeModal } from "@/components/recipe-modal";

export function RecipesDisplay({ recipeData }: { recipeData: any }) {
  return (
    <div className="my-2 w-full flex flex-wrap justify-center gap-4">
      {recipeData.map((recipe: any, i: number) => {
        return <RecipeModal key={i} recipe={recipe} />;
      })}
    </div>
  );
}
