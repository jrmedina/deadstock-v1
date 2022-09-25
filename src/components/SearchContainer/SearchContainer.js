import React from "react";
import MiniPost from "../MiniPost/MiniPost";
import "./SearchContainer.css";

const SearchContainer = ({ query }) => {
  const toBeDisplayed = query.length ? (
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

  return <div className="SearchContainer">{toBeDisplayed}</div>;
};

export default SearchContainer;
