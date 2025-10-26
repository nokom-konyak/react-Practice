import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProviderUseContext";

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button onClick={toggleTheme} style={styles}>
      Current theme: {theme}
    </button>
  );
}
export default ThemedButton;