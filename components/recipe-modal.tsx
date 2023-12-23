import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { RecipeCard } from "@/components/recipe-card";
import { RecipeInstructions } from "@/components/recipe-instructions";
import { RecipeIngredients } from "@/components/recipe-ingredients";

export function RecipeModal({ recipe }: { recipe: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="">
      <RecipeCard
        recipe={recipe}
        onPressHandler={() => {
          console.log(recipe);
          onOpen();
        }}
      />
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 items-center">
                {recipe.recipe.label}
                <Image src={recipe.recipe.images.REGULAR.url} />
              </ModalHeader>
              <ModalBody>
                <div className="flex">
                  <div className="w-[50%]">
                    <h2 className="text-lg font-bold">Instructions</h2>
                    <RecipeInstructions
                      instructionData={recipe.recipe.instructionLines}
                      recipeUrl={recipe.recipe.url}
                    />
                  </div>
                  <div className="w-[50%] flex justify-center">
                    <div>
                      <h2 className="text-lg font-bold">Ingredients</h2>
                      <RecipeIngredients
                        ingredientData={recipe.recipe.ingredientLines}
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
