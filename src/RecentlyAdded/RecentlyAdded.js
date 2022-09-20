import React from "react";
import MiniPost from "../MiniPost/MiniPost";

const RecentlyAdded = ({inventory}) => {

    const miniPosts = inventory.map(shoe => <MiniPost title={shoe.title} size={shoe.size} image={shoe.url} />)
    
  return <div>{miniPosts}</div>;
};

export default RecentlyAdded;
