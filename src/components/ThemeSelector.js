import "./ThemeSelector.css";

import modeIcon from "../assets/mode-icon.svg";
import { useTheme } from "../hooks/useTheme";

const themeColors = ["#063970", "#700639", "#397006"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
          alt="Mode Toggle"
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div key={color} onClick={() => changeColor(color)} style={{ background: color }} />
        ))}
      </div>
    </div>
  );
}
