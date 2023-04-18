import React from "react";

function Search({ searchTerm, onSearchChange }) {
  // destructure
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        // onChange={(e) => console.log("Searching...")}
        onChange={(e) => onSearchChange(e.target.value)} // search type
      />
    </div>
  );
}

export default Search;
