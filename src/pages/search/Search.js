import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

export default function Search() {
  // const { q: query } = new URLSearchParams(useLocation());
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const url = "http://localhost:3001/recipes?q=" + query;
  const { data: recipes, isPending, error } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
