import "./Search.css";

import { useEffect, useState } from "react";

import RecipeList from "../../components/RecipeList";
import { projectFirestore } from "../../firebase/config";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

export default function Search() {
  const [recipes, setRecipes] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .where("title", ">=", query)
      .onSnapshot(
        (querySnapshot) => {
          if (querySnapshot.empty) {
            setError("No recipes found");
            setRecipes(null);
            setIsPending(false);
          } else {
            let results = [];
            querySnapshot.docs.forEach((doc) => {
              results.push({ id: doc.id, ...doc.data() });
            });
            setRecipes(results);
            setError(false);
            setIsPending(false);
          }
        },
        (err) => {
          setError(err.message);
          setRecipes(null);
          setIsPending(false);
        }
      );

    return () => unsub();
  }, [query]);

  return (
    <div className={`search ${mode}`}>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
