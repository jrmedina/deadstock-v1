import React from "react";
import MiniPost from "../MiniPost/MiniPost";
import "./ListView.css";

const ListView = ({ all,  }) => {
  const miniPosts = all.map((shoe) => (
    <MiniPost
      title={shoe.title}
      size={shoe.size}
      image={shoe.url}
      key={shoe.id}
      id={shoe.id}
    />
  ));
  return <div className="ListView">{miniPosts}</div>;
};

export default ListView;
