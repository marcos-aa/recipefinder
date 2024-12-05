import { useState } from "react";
import { IRecipe } from "../App";

type PartialRecipe = Omit<IRecipe, 'id' | 'instructions'> & {
    id?: string,
    instructions?: string[],
    onClick?: React.MouseEventHandler<HTMLHeadingElement>
}


export default function Recipe({ name, ingredients, instructions = [], imageURL, onClick, ...props }: PartialRecipe) {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavorite = () => {
    }

    return (
        <div className="recipe">
            <div className="head">
                <h2 className="props-title" {...props} onClick={onClick}>{name}</h2>
                <button onClick={handleFavorite}> {isFavorite ? "Unfavourite" : "Favorite"} </button>
            </div>
            <img src={imageURL} alt={`A ${name} dish`} />
            <div>
                <p className="topic">Ingredients</p>
                <p> {ingredients.join(', ')} </p>
            </div>
            {instructions.length > 0 &&
                <div>
                    <p className="topic">Instructions</p>
                    <ol>
                        {instructions.map((step, i) => <li key={`${i}-${step[0]}`}>{step}</li>)}
                    </ol>
                </div>
            }

        </div>
    )
}