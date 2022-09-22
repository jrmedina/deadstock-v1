import React from "react";
import "./Enlarged.css";

const Enlarged = ({ pair }) => {
  const { title, release, size, colors, quantity, user, url, brand, code } =
    pair;
  const text = "it worked!";

  return (
    <div className="Enlarged">
      <h1 className="eltitle">{title}</h1>
      <div className="elcontainer">
        <img src={url} alt={title} className="elimage" />

        <div className="details">
          <p>Colors: {colors.join(" / ")}</p>
          <p>Size: {size}</p>
          <p>Release Date: {release}</p>
          <p>Quantity: {quantity}</p>
          <p>Brand: {brand}</p>
          <p>SKU: {code}</p>
          <p>Seller: {user}</p>
          <p>Price: $123 USD</p>
          <button onClick={navigator.clipboard.writeText(text)}>
          Click to copy offer
      </button> 
        </div>
      </div>
    </div>
  );
};

export default Enlarged;
