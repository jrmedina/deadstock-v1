import React, { useState } from "react";
import "./SearchBar.css"
import { Link } from "react-router-dom";

const SearchBar = ({ handleInput }) => {

  return (
    <form className="SearchBar">
      <Link to={"/"}>
        <input
          name="input"
          type="text"
          placeholder="search"
          onChange={(e) => handleInput(e.target.value)}
        />
      </Link>
    </form>
  );
};

export default SearchBar;
