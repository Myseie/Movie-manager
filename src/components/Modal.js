import React from "react";

const Modal = ({ movie, onClose }) => {
    if(!movie) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{movie.title}</h2>
                <p> Genre: {movie.genre}</p>
                <p>Rating: {movie.rating}</p>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;