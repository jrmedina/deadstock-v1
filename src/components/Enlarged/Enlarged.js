import React from "react";
import PropTypes from "prop-types";
import "./Enlarged.css";
import { useForm } from "react-hook-form";



const Enlarged = ({ pair }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:${contact}?subject=${formData.subject}&body=Hey! My name is ${formData.name}. I was interested in buying your ${title} for $${formData.message}. If that works, let's chat. (${formData.email})`;
  };

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
    price,
  } = pair;



  return (
    <div className="Enlarged">
      <h1 className="el-title">{title}</h1>
      <div className="el-container">
        <img src={url} alt={title} className="el-image" />
        <div className="details">
          <p>Colors: {colors}</p>
          <p>Size: {size}</p>
          <p>Release Date: {release}</p>
          <p>Quantity: {quantity}</p>
          <p>Brand: {brand}</p>
          <p>SKU: {code}</p>
          <p>Seller: {user}</p>
          <p>Price: ${price}.00 USD</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="offer-form">
          <h4 className="copy-msg">
            Interested?<br></br> Let's send {user} an offer!
          </h4>
          <input
            {...register("subject")}
            className="offerInput subject"
            type="text"
            placeholder="Subject"
          />
          <input
            {...register("name")}
            className="offerInput name"
            type="text"
            placeholder="Name"
          />
          <input
            {...register("email")}
            className="offerInput email"
            type="email"
            placeholder="Email"
          />
          <input
            {...register("message")}
            className="offerInput ammount"
            placeholder="Offer"
            type="number"
          />
        </div>
      </form>
      <button className="general-button" type="submit">
        Submit
      </button>
    </div>
  );
};

export default Enlarged;

Enlarged.propTypes = {
  pair: PropTypes.shape({
    brand: PropTypes.string,
    code: PropTypes.string,
    colors: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    contact: PropTypes.string,
    id: PropTypes.number,
    release: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    url: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
};
