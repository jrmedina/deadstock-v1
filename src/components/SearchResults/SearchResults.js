import React from "react";
import PropTypes from "prop-types";
import MiniPost from "../MiniPost/MiniPost";
import "./SearchResults.css";

const SearchResults = ({ query }) => {
  const results = query.length ? (
    query.map((shoe) => (
      <MiniPost
        title={shoe.title}
        image={shoe.url}
        size={shoe.size}
        key={shoe.id}
        id={shoe.id}
      />
    ))
  ) : (
    <div>
      <h2>no matching results!</h2>
      <p>you can try searching by color, sku, brand, or name</p>
      <br></br>
    </div>
  );

  return <div className="SearchContainer">{results}</div>;
};

export default SearchResults;

SearchResults.propTypes = {
  query: PropTypes.array.isRequired,
};
