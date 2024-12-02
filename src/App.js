import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import FilterBar from "./components/FilterBar";
import sampleMovies from "./data/sampleMovies";
import Modal from "./components/Modal";


const App = () => {
  const [movies, setMovies] = useState(sampleMovies);
  const [filter, setFilter] = useState("");
  const [sortOption, setSortOption] = useState("alphabetical");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);


  const addMovie = (newMovie) => {
    setMovies([...movies, {...newMovie, id: Date.now( )}]);
  };

  const getFilteredMovies = () => {
    let filteredMovies = movies;

    if (filter && filter !== "All") {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.genre.toLowerCase() === filter.toLowerCase()
      );
    }

    if(sortOption === "alphabetical") {
      filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    }else if (sortOption === "rating") {
      filteredMovies.sort((a, b) => b.rating - a.rating);
    }

    if (searchQuery.trim()) {
      filteredMovies = filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    }
    return filteredMovies;
  };

  return (
    <div className="app-container">
      <h1>Movie Manager</h1>
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <AddMovieForm addMovie={addMovie} />
      <MovieList movies={getFilteredMovies()} onSelectMovie={setSelectedMovie} />
      {selectedMovie && (
        <Modal 
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default App;
