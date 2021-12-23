import "./Create.css";

import { useEffect, useRef, useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const { data, postData } = useFetch("http://localhost:3001/recipes", "POST");
  const navigate = useNavigate();
  const { color, mode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, ingredients, method, cookingTime: cookingTime + " minutes" });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredient("");
    ingredientInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd} style={{ backgroundColor: color }}>
              Add
            </button>
          </div>
        </label>
        {ingredients.length !== 0 && (
          <p>
            Current ingredients:{" "}
            {ingredients.map((ing, i) =>
              i === ingredients.length - 1 ? <em key={i}>{ing}</em> : <em key={i}>{ing}, </em>
            )}
          </p>
        )}

        <label>
          <span>Recipe method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn" onClick={handleSubmit} style={{ backgroundColor: color }}>
          Submit
        </button>
      </form>
    </div>
  );
}
