import "./ThemeSelector.css";

import { useTheme } from "../hooks/useTheme";

const themeColors = ["#063970", "#700639", "#397006"];

export default function ThemeSelector() {
  const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div key={color} onClick={() => changeColor(color)} style={{ background: color }} />
        ))}
      </div>
    </div>
  );
}
