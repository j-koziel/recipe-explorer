import { Link } from "@nextui-org/react";

export function RecipeInstructions({
  instructionData,
  recipeUrl,
}: {
  instructionData: string[];
  recipeUrl: string;
}) {
  if (!instructionData.length) {
    return (
      <div>
        <p>Weird, this recipe doesn't seem to have the instructions 🤷‍♂️</p>
        <Link href={recipeUrl} target="_blank" rel="noreferrer">
          Click here to go to the recipe website
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ol className="flex flex-col gap-2">
        {instructionData.map((instruction: string, i: number) => (
          <li key={i}>
            <div className="flex gap-2">
              <p className="font-bold">{i + 1}.</p> {instruction}
            </div>
          </li>
        ))}
      </ol>
      <Link href={recipeUrl} target="_blank" rel="noreferrer">
        Click here to go to the recipe website
      </Link>
    </div>
  );
}
