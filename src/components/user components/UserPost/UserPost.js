import React, { useState } from "react";
import "./UserPost.css";
import PropTypes from "prop-types";

const UserPost = ({
  title,
  url,
  size,
  code,
  release,
  quantity,
  id,
  colors,
  brand,
  update,
  user,
  deletePost,
  price,
}) => {
  const [lock, setLock] = useState(true);
  const [msg, setMsg] = useState("");
  const [post, setPost] = useState({
    title: title,
    url: url,
    size: size,
    code: code,
    release: release,
    quantity: quantity,
    id: id,
    brand: brand,
    user: user,
    colors: colors,
  });

  const handleClick = (e) => {
    e.preventDefault();
    setMsg("EDITING...");
    setLock(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const save = (e) => {
    e.preventDefault();
    update(post);
    setLock(true);
    setMsg("SAVED!");
  };

  const button = lock ? (
    <button className="edit-btn" testid="edit" id={id} onClick={handleClick}>
      Edit
    </button>
  ) : (
    <button className="edit-btn" testid="save" id={id} onClick={save}>
      Save
    </button>
  );

  return (
    <div className="UserPost">
      <p className="post-message">{msg}</p>
      <img src={url} className="lgimage" alt={title} />
      <h4 className="title">{title}</h4>
      <p>Release: {release}</p>
      <p> SKU: {code} </p>
      <p> Size: {size} </p>
      <div className="edit-container">
        <label>Quantity: </label>
        <input
          type="number"
          testid="quantity"
          name="quantity"
          className="edit quantity"
          placeholder={quantity}
          disabled={lock}
          onChange={(e) => handleChange(e)}
        />
        <label>Price: </label>
        <input
          type="text"
          name="price"
          testid="price"
          className="edit price"
          placeholder={price}
          disabled={lock}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="btn-container">
        {button}
        <button
          testid="delete"
          className="delete-btn"
          id={id}
          onClick={(e) => deletePost(e)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserPost;

UserPost.propTypes = {
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
  deletePost: PropTypes.func,
  update: PropTypes.func,
}.isRequired;
