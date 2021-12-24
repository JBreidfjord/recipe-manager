import "./Recipe.css";

import { useEffect, useState } from "react";

import { projectFirestore } from "../../firebase/config";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setRecipe(doc.data());
          setError(false);
          setIsPending(false);
        } else {
          setError("Error fetching recipe");
          setRecipe(null);
          setIsPending(false);
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
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
