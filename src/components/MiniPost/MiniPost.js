import React from "react";
import PropTypes from "prop-types";
import "./MiniPost.css";
import { Link } from "react-router-dom";

const MiniPost = ({ title, image, size, id, enlarge }) => {
  return (
    <div className="MiniPost">
      <Link to={`/inventory/${id}`}>
        <img src={image} className="mini-image" alt={title} onClick={enlarge} />
      </Link>
      <h3 className="title">{title}</h3>
      <h4 className="mini-size">Size: {size}</h4>
    </div>
  );
};

export default MiniPost;

MiniPost.propTypes = {
  id: PropTypes.number,
  size: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  enlarge: PropTypes.func.isRequired,
}.isRequired;
