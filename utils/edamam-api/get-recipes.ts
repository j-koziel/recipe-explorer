"use server";
import axios from "axios"

export async function getRecipesByTextQuery(q: string) {
  const queryParams = { q, app_id: "7061ebe9", app_key: "b51ac1ba2aaecb521f999f55d258dacb", type: "public" }
  const res = await axios.get(`https://api.edamam.com/api/recipes/v2`, { params: queryParams })

  return res.data
} 