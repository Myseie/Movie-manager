import React from "react";

const MovieCard = ({ movie, onSelectMovie }) => {
    return (
        <div className="movie-card"
        onClick={() => onSelectMovie(movie)}
        style={{ cursor: "pointer" }}
        >
            <h3> {movie.title} </h3>
            <p> Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}/5</p>
        </div>
    );
};

export default MovieCard;