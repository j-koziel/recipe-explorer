"use server"
import axios from "axios"

async function getRecipeData(formData: FormData) {
  const recipeQuery = formData.get("recipe-query")

  try {
    const recipeData = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeQuery}&app_id=${process.env.NEXT_PUBLIC_RECIPE_API_ID}&app_key=${process.env.NEXT_PUBLIC_RECIPE_API_KEY}`)

    console.log(recipeData.data.hits)
  } catch (err) {
    console.error(err)
  }

}

export default getRecipeData