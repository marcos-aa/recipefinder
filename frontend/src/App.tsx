import { ChangeEvent, useEffect, useState } from "react"
import "./App.css"
import Recipe from "./components/Recipe"
export interface IRecipe {
  id: string
  name: string
  ingredients: string[]
  instructions: string[]
  imageURL?: string
}

const BASE_URL = "http://localhost:3000"

export default function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [recipe, setRecipe] = useState<IRecipe>()
  const [search, setSearch] = useState<string>('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
  }

  const getRecipes = async (query: string) => {
    const ingredients = query.split(",")

    const response = await fetch(`${BASE_URL}/recipes?q=${ingredients}`);
    if (!response.ok) throw new Error('Failed to fetch data');

    const data = await response.json();
    setRecipes(data);
  }


  const getRecipeById = async (id: string) => {
    const response = await fetch(`${BASE_URL}/recipes/${id}`);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data: IRecipe = await response.json();
    console.log(data, response)
    setRecipe(data);
  }

  useEffect(() => { getRecipes(search) }, [search])


  return (
    <main>
      <h1> Recipes </h1>
      <input type="text" name="q" onChange={handleSearch} value={search} />
      <div className="recipes">
        {recipes.map((recipe: IRecipe) =>
          <div key={recipe.id}>
            <Recipe
              name={recipe.name}
              ingredients={recipe.ingredients}
              imageURL={recipe.imageURL}
              onClick={() => getRecipeById(recipe.id)}
            />
          </div>
        )}
      </div>
      {recipe &&
        <div id="recipe-modal">
          <div id="selected-recipe">
            <Recipe name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} imageURL={recipe.imageURL} />
          </div>
        </div>
      }

    </main>
  )
}