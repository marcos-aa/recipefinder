import { ChangeEvent, useEffect, useState } from "react"

interface Recipe {
  id: string
  name: string
  ingredients: string[]
  instructions: string[]
  imageURL?: string
}

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [search, setSearch] = useState<string>('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
  }

  const getRecipes = async (query: string) => {
    const ingredients = query.split(",")

    const response = await fetch(`http://localhost:3000/recipes?q=${ingredients}`);
    if (!response.ok) throw new Error('Failed to fetch data');

    const data = await response.json();
    setRecipes(data);
  }

  useEffect(() => { getRecipes(search) }, [search])


  return (
    <main>
      <h1> Recipes </h1>
      <input type="text" name="q" onChange={handleSearch} value={search} />
      <div className="recipes">
        {recipes.map((recipe: Recipe) =>
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <img src={recipe.imageURL} alt={`A ${recipe.name} dish`} />
            <p> Ingredients: {recipe.ingredients.join(',')}</p>
            <ol>
              {recipe.instructions.map((step, i) => <li key={`${i}-${step[0]}`}>{step}</li>)}
            </ol>
          </div>
        )}
      </div>
    </main>
  )
}