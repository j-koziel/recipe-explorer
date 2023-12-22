import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export function RecipeCard({
  recipe,
  onPressHandler,
}: {
  recipe: any;
  onPressHandler: any;
}) {
  return (
    <Card isPressable onPress={onPressHandler}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Recipe</p>
        <small className="text-default-500">
          {recipe.recipe.ingredients.length} Ingredients
        </small>
        <h4 className="font-bold text-large">{recipe.recipe.label}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          src={recipe.recipe.images.REGULAR.url}
          alt={recipe.recipe.label}
        />
      </CardBody>
    </Card>
  );
}
