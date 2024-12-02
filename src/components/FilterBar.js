import React from "react";


const FilterBar = ({ filter, setFilter, sortOption, setSortOption }) => {
    return (
        <div className="filter-bar">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All Genres</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
            </select>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="alphabetical">Sort Alphabetically</option>
                <option value="rating">Sort by Rating</option>
            </select>
        </div>
    );
};

export default FilterBar;