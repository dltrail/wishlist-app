import React, { useState, useEffect } from "react";
import styles from "./ThemeSwitcher.module.css";
import useLocalStorage from "../../Hooks/useLocalStorage";

function ThemeSwitcher() {
  const [hue, setHue] = useLocalStorage("react-todo.color", "240");

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "react-todo.theme",
    defaultDark ? "dark" : "light"
  );

  const [isColorPicking, setIsColorPicking] = useState(false);

  const handleThemeBtnClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  return (
    <aside
      className={styles.wrapper}
      style={{
        backgroundColor: isColorPicking
          ? "hsl(var(--muted) / .6)"
          : "transparent",
      }}
    >
      {isColorPicking ? (
        <>
          <button
            className={styles.close}
            aria-label="close colo picking mode"
            onClick={() => setIsColorPicking(false)}
          >
            close
          </button>
          <input
            className={styles.picker}
            type="range"
            min="0"
            max="360"
            aria-label="Change color theme slider"
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
        </>
      ) : (
        <div className={styles.btns}>
          {/* heroicons! */}
          <button
            onClick={handleThemeBtnClick}
            className={styles.btn}
            aria-label={`change string to ${theme === "light"}  mode`}
            role="switch"
            aria-checked="true"
          >
            {theme === "light" ? "moon" : "sun"}
          </button>{" "}
          <button
            className={styles.btn}
            aria-label={"Enable color picking mode"}
            role="switch"
            onClick={() => setIsColorPicking(true)}
            aria-checked="true"
          >
            swatch
          </button>
        </div>
      )}
    </aside>
  );
}

export default ThemeSwitcher;
