import "./Home.css";

import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";

export default function Home() {
  const { data: recipes, isPending, error } = useFetch("http://localhost:3001/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
