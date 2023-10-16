import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NavBar() {
  const [themeMode, setThemeMode] = useState("dark");

  return (
    <div className="nav-bar-container dark">
      <h1>Recipe Explorer</h1>
      <form>
        <input type="text" placeholder="search for a recipe :)" />
      </form>
      <div>
        <button
          className="theme-switch"
          onClick={() => {
            themeMode === "dark" ? setThemeMode("light") : setThemeMode("dark");
          }}
        >
          {themeMode === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
