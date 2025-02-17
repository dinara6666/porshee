import React from "react";

export default function SearchBar({ search, setSearch }) {
    return (
        <input
            type="text"
            placeholder="Поиск машины..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
        />
    );
}
