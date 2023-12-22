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
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {recipe.recipe.label}
                <Image src={recipe.recipe.images.REGULAR.url} />
              </ModalHeader>
              <ModalBody>
                <h1 className="text-lg font-bold">Instructions</h1>
                <ol>
                  {recipe.recipe.instructionLines.map(
                    (instruction: string, i: number) => (
                      <li key={i}>
                        {i + 1}. {instruction}
                      </li>
                    )
                  )}
                </ol>
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
