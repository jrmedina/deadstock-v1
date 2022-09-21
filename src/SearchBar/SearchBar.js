import React, { useState } from "react";

const SearchBar = ({ handleInput }) => {

  return (
    <form>
      <input
        name="input"
        type="text"
        placeholder="search"
        onChange={(e) => handleInput(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
