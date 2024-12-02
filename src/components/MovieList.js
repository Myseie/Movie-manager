import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelectMovie }) => {
    return (
      <div className="movie-list">
        {movies.length === 0 ? (
          <p>No movies to display</p>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelectMovie={onSelectMovie}
            />
          ))
        )}
      </div>
    );
  };
export default MovieList;