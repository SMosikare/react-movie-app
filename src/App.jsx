import React from "react";
import searchIcon from "./assets/search-icon.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>MovieVille</h1>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search movies"
          />

          <button className="search-button">
            <img src={searchIcon} alt="Search movies" className="search-icon" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
