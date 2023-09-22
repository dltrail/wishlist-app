import React, { useState, useEffect } from "react";
import styles from "./ThemeSwitcher.module.css";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { MoonIcon, SunIcon, SwatchIcon } from "@heroicons/react/24/solid";

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
            className={styles.btn}
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
            className="btn tooltip"
            aria-label={`change string to ${theme === "light"}  mode`}
            role="switch"
            aria-checked="true"
          >
            {theme === "light" ? (
              <>
                {" "}
                <span className="tooltiptext">Switch to dark mode</span>
                <MoonIcon height={26} />
              </>
            ) : (
              <>
                {" "}
                <span className="tooltiptext">Switch to light mode</span>
                <SunIcon height={26} />
              </>
            )}
          </button>{" "}
          <button
            className="btn tooltip"
            aria-label={"Enable color picking mode"}
            role="switch"
            onClick={() => setIsColorPicking(true)}
            aria-checked="true"
          >
            <span className="tooltiptext">Pick your colour</span>
            <SwatchIcon height={26} />
          </button>
        </div>
      )}
    </aside>
  );
}

export default ThemeSwitcher;
