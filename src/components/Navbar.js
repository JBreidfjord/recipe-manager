import "./Navbar.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="" className="brand">
          <h1>Recipe Manager</h1>
        </NavLink>
        <NavLink to="create">Create Recipe</NavLink>
      </nav>
    </div>
  );
}
