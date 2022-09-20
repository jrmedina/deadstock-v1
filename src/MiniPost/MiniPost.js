import React from "react";
import "./MiniPost.css"

const MiniPost = ({title, image, size}) => {

  return <div className="card">
    <h3 className="title">{title}</h3>
    <h4 className="size">Size: {size}</h4>
    <img className="imagesrc" src={image} />
    
    </div>;
};

export default MiniPost;
