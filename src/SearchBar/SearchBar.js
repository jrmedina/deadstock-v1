import React, { useState } from "react";

const SearchBar = ({ handleInput }) => {
  const [select, setSelect] = useState("title");

  const handleChange = (e) => {
//    let term  = select === 'size' ? parseInt(select) : select
    handleInput(e.target.value, select);
  };

  return (
    <form>
      <input
        name="input"
        type="text"
        placeholder="search"
        onChange={(e) => handleChange(e)}
      />
      <select name="option" onChange={(e) => setSelect(e.target.value)}>
        <option value="">Search by..</option>
        <option value="title">Name</option>
        <option value="colors">Color</option>
        <option value="size">Size</option>
        <option value="code">SKU</option>
      </select>
    </form>
  );
};

export default SearchBar;
