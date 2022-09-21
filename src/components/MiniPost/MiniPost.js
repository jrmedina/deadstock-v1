import React from "react";
import "./MiniPost.css";

const MiniPost = ({ title, image, size }) => {
  const handleClick = (e) => {
    console.log(e.target.alt);
  };

  return (
    <div className="MiniPost">
      <img src={image} className="image" alt={title} onClick={handleClick} />
      <h3 className="title">{title}</h3>
      <h4 className="size">Size: {size}</h4>
    </div>
  );
};

export default MiniPost;
