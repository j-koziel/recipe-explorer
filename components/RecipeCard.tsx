"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function RecipeCard({ recipeObj }: { recipeObj: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold truncate">
            {recipeObj.recipe.label}
          </p>
          <small className="text-default-500">
            Ingredients: {recipeObj.recipe.ingredients.length}
          </small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={recipeObj.recipe.label}
            className="object-cover rounded-xl"
            src={recipeObj.recipe.image}
            width={270}
          />
        </CardBody>
      </Card>
    </motion.div>
  );
}
