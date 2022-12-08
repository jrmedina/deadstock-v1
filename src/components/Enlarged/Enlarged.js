import React from "react";
import PropTypes from "prop-types";
import "./Enlarged.css";
import { TemporaryDrawer } from "../Materials/Drawer"; 



const Enlarged = ({ pair }) => {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (formData) => {

  //   window.location.href = `mailto:${contact}?subject=${formData.subject}&body=Hey! My name is ${formData.name}. I was interested in buying your ${title} for $${formData.message}. If that works, let's chat. (${formData.email})`;
  // };

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
      <TemporaryDrawer contact={contact} title={title}/>
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
