import React from "react";
import { useState } from "react";

function Search({ updatePlants }) {
  



  function handleChange(event) {
    updatePlants(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
