import { Children, createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const themeData = useTheme();
  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
