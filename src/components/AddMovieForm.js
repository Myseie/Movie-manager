import React, {useState} from "react";



const AddMovieForm = ({addMovie}) => {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("Drama");
    const [rating, setRating] = useState(1);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title) return alert("Title is required!");

        const newMovie = {
            id: Date.now(),
            title,
            genre,
            rating,
        };

        addMovie(newMovie);
        setTitle("");
        setGenre("Drama");
        setRating(1);
    };

    return (
        <form onSubmit={handleSubmit} className="add-movie-form">
            <input
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
            </select>
            <input 
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovieForm;