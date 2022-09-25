import React from "react";
import PropTypes from "prop-types";
import UserPost from "../UserPost/UserPost";
import "./Closet.css";
import { Link } from "react-router-dom";

const Closet = ({ closet, update, deletePost }) => {
  const toBeDisplayed = closet.length ? (
    closet
      .map((shoe) => (
        <UserPost
          title={shoe.title}
          url={shoe.url}
          size={shoe.size}
          code={shoe.code}
          release={shoe.release}
          quantity={shoe.quantity}
          key={shoe.id}
          id={shoe.id}
          brand={shoe.brand}
          update={update}
          user={shoe.user}
          deletePost={deletePost}
          price={shoe.price}
          colors={shoe.colors}
        />
      ))
      .reverse()
  ) : (
    <h2>Looks like we need to add some shoes...</h2>
  );
  return (
    <div className="Closet">
      <Link to={`/createpost`}>
        <button className="add-btn">Add To Closet</button>
      </Link>
      <div className="closet-container">{toBeDisplayed}</div>
    </div>
  );
};

export default Closet;

Closet.propTypes = {
  closet: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string,
      code: PropTypes.string,
      colors: PropTypes.array,
      contact: PropTypes.string,
      id: PropTypes.number,
      release: PropTypes.string,
      size: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
      user: PropTypes.string,
    })
  ).isRequired,
  update: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};
