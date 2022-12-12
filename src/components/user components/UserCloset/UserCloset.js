import React from "react";
import UserPost from "../UserPost/UserPost";
import "./UserCloset.css";
import { Link } from "react-router-dom";
import Error from "../../Error/Error";
import PropTypes from "prop-types";


const UserCloset = ({ closet, update, deletePost }) => {
  const toBeDisplayed = closet
    ?.map((shoe, index) => (
      <UserPost
        title={shoe.title}
        url={shoe.url}
        size={shoe.size}
        code={shoe.code}
        release={shoe.release}
        quantity={shoe.quantity}
        key={index}
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
  return !closet ? (
    <Error />
  ) : (
    <div className="Closet">
      <Link to={`/createpost`}>
        <button className="add-btn">Add To Closet</button>
      </Link>
      {!closet.length && <h2>Looks like we need to add some shoes...</h2>}
      <div className="closet-container">{toBeDisplayed}</div>
    </div>
  );
};

export default UserCloset;

UserCloset.propTypes = {
  closet: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string,
      code: PropTypes.string,
      contact: PropTypes.string,
      id: PropTypes.number,
      release: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      user: PropTypes.string,
    })
  ),
  update: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};
