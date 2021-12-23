import "./Navbar.css";

import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <NavLink to="" className="brand">
          <h1>Recipe Manager</h1>
        </NavLink>
        <Searchbar />
        <NavLink to="create">Create Recipe</NavLink>
      </nav>
    </div>
  );
}
