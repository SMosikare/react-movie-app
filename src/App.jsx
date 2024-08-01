import React from "react";
import searchIcon from "./assets/search-icon.svg";
import MovieCard from "./MovieCard";
import "./App.css";

function App() {
  const movie = {
    title: "Guardians of the Galaxy Vol. 2",
    year: "2017",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    type: "movie",
  };

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

      <div className="movie-container">
        <MovieCard movie={movie} />
      </div>
    </div>
  );
}

export default App;
