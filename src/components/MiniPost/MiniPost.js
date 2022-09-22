import React from "react";
import "./MiniPost.css";
import { Link } from "react-router-dom";
const MiniPost = ({ title, image, size, id, enlarge }) => {
  return (
    <div className="MiniPost">
      <Link to={`/${id}`}>
        <img src={image} className="image" alt={title} onClick={enlarge} />
      </Link>
      <h3 className="title">{title}</h3>
      <h4 className="miniSize">Size: {size}</h4>
    </div>
  );
};

export default MiniPost;
