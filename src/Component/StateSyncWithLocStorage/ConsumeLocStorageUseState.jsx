import React from "react";
import { useLocalStorage } from "./LocStorageUseState";

export default function ConsumeLocStorageUseState() {
  // State persists in localStorage under the key "theme"
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const styles = {
    padding: "20px",
    background: theme === "light" ? "#f2f2f2" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div style={styles}>
      <h2>🌓 useLocalStorage Custom Hook Example</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
