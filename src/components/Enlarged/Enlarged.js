import React, { useState } from "react";
import "./Enlarged.css";

const Enlarged = ({ pair }) => {
  const {
    title,
    release,
    size,
    colors,
    quantity,
    user,
    url,
    brand,
    code,
    contact,
    price
  } = pair;

  const [msg, setMsg] = useState(false);

  const copyMessage = (toCopy) => {
    const offer = `
    ${contact}
    
    
    Yo ${user},
  I saw your ${title} post listed on Deadstock for $${price}, I would like to discuss an offer.`;
    navigator.clipboard.writeText(offer);
    setMsg(!msg)
  };

  return (
    <div className="Enlarged">
      <h1 className="el-title">{title}</h1>
      <div className="el-container">
        <img src={url} alt={title} className="el-image" />

        <div className="details">
          <p>Colors: {colors.join(" / ")}</p>
          <p>Size: {size}</p>
          <p>Release Date: {release}</p>
          <p>Quantity: {quantity}</p>
          <p>Brand: {brand}</p>
          <p>SKU: {code}</p>
          <p>Seller: {user}</p>
          <p>Price: ${price}.00 USD</p>

          <h4 className="copy-msg">
            Interested?<br></br> Let's send {user} an email!
          </h4>

          <button onClick={copyMessage} className="copy-btn">
            Click to copy offer message
          </button>
          {msg && <h3 className="copy-msg copied">COPIED!</h3>}
        </div>
      </div>
    </div>
  );
};

export default Enlarged;
