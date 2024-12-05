import { IRecipe } from "../App";

type PartialRecipe = Omit<IRecipe, 'id' | 'instructions'> & { instructions?: string[], onClick?: React.MouseEventHandler<HTMLHeadingElement> }

export default function Recipe({ name, ingredients, instructions = [], imageURL, onClick, ...props }: PartialRecipe) {
    return <div>
        <h2 className="props-title" {...props} onClick={onClick}>{name}</h2>
        <img src={imageURL} alt={`A ${name} dish`} />
        <p> Ingredients: {ingredients.join(',')}</p>
        {instructions.length > 0 &&
            <ol>
                {instructions.map((step, i) => <li key={`${i}-${step[0]}`}>{step}</li>)}
            </ol>
        }
    </div>
}