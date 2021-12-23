import { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  return <ThemeContext.Provider value={{ color: "#063970" }}>{children}</ThemeContext.Provider>;
}
