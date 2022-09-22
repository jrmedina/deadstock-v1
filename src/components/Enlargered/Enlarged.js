import React from "react";
import "./Enlarged.css";

const Enlarged = ({ pair }) => {
  const { title, release, size, colors, quantity, user, url, brand, code } =
    pair;
  const text = "it worked!";

  return (
    <div className="Enlarged">
      <h1>{title}</h1>
      <img src={url} alt={title} className="elimage" />
      <div className="details">
        <p>{colors}</p>
        <p>{size}</p>
        <p>{release}</p>
        <p>{quantity}</p>
        <p>{brand}</p>
        <p>{code}</p>
        <p>{user}</p>
      </div>
      <button onClick={navigator.clipboard.writeText(text)}>
        Click to copy offer
      </button>
    </div>
  );
};

export default Enlarged;
