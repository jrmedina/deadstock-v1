import React from "react";
import "./MiniPost.css";

const MiniPost = ({ title, image, size }) => {


  return (
    <div className="MiniPost">
      <img src={image} className="image" alt={title} />
      <h3 className="title">{title}</h3>
      <h4 className="miniSize">Size: {size}</h4>
    </div>
  );
};

export default MiniPost;
