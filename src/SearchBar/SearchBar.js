import React, { useState } from "react";

const SearchBar = ({handleInput}) => {
  return (
    <form>
      <input type="text" placeholder="search" onChange={handleInput} />
      <select>
        <option>Name</option>
        <option>Color</option>
        <option>Size</option>
        <option>SKU</option>
      </select>
      <button></button>
    </form>
  );
};

export default SearchBar;
