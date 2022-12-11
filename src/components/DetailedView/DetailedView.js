import React from "react";
import PropTypes from "prop-types";
import "./DetailedView.css";
import { TemporaryDrawer } from "../MUI/Drawer";
import { formatData } from "../../utils/formatData";

const DetailedView = ({ pair }) => {
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
  } = formatData(pair);

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
          <p>Price: ${price} USD</p>
        </div>
      </div>
      <TemporaryDrawer contact={contact} title={title} user={user} />
    </div>
  );
};

export default DetailedView;

DetailedView.propTypes = {
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