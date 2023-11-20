"use server"
import axios from "axios"

async function getRecipeData(recipeQuery: string) {
  try {
    const recipeData = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeQuery}&app_id=${process.env.NEXT_PUBLIC_RECIPE_API_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}`)

    return recipeData.data.hits.slice(0, 5)
  } catch (err) {
    console.error(err)
  }

}

export default getRecipeData