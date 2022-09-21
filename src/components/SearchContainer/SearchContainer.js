import React from "react";
import MiniPost from "../MiniPost/MiniPost";
import "./SearchContainer.css"

const SearchContainer = ({ query }) => {
  const miniPosts = query.map((shoe) => (
    <MiniPost title={shoe.title} image={shoe.url} size={shoe.size} key={shoe.id} className='test'/>
  ));


  
  return (

      <div className="SearchContainer">{miniPosts}</div>

  );
};

export default SearchContainer;
