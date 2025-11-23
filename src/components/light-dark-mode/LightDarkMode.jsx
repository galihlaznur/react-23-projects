import React from "react";
import useLocalStorage from "./useLocalStorage";
import style from "./theme.module.css";

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const handleToggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

  return (
    <div className={style["light-dark-mode"]} data-theme={theme}>
      <div className={style.container}>
        <h2>Light/Dark Mode</h2>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
