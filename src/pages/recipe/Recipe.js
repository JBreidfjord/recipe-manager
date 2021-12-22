import "./Recipe.css";

import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const { id } = useParams();
  const { data: recipe, isPending, error } = useFetch(`http://localhost:3001/recipes/${id}`);
  return (
    <div className="recipe">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>{recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
