import React, { useState, useEffect } from "react";
import searchIcon from "./assets/search-icon.svg";
import MovieCard from "./MovieCard";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchMoviedata("Transformers");
  }, []);

  function updateSearchInput(event) {
    setSearchInput(event.target.value);
  }

  async function fetchMoviedata(movie) {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const apiUrl = `https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      setMovies(data.Search);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>MovieVille</h1>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search movies"
            value={searchInput}
            onChange={updateSearchInput}
          />

          <button
            className="search-button"
            onClick={() => {
              fetchMoviedata(searchInput);
            }}
          >
            <img src={searchIcon} alt="Search movies" className="search-icon" />
          </button>
        </div>
      </header>

      {movies?.length > 0 ? (
        <div className="movie-container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <h2 className="no-movie-matches">No movies found</h2>
      )}
    </div>
  );
}

export default App;
