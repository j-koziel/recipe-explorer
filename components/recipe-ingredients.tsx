export function RecipeIngredients({
  ingredientData,
}: {
  ingredientData: string[];
}) {
  return (
    <ul className="flex flex-col gap-2 list-disc">
      {ingredientData.map((ingredient, i) => (
        <li key={i}>{ingredient}</li>
      ))}
    </ul>
  );
}
