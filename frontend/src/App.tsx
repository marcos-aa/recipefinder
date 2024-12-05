import { ChangeEvent, useState } from "react"

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
  }

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
              {recipe.instructions.map((step) => <li>{step}</li>)}
            </ol>
          </div>
        )}
      </div>
    </main>
  )
}