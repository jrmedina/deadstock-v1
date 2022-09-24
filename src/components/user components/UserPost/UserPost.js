import React, { useState } from "react";
import "./UserPost.css";

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
  price
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
    <form className="UserPost">
      <img src={url} className="lgimage" alt={title} />
      <h4 className="title">{title}</h4>
      <p>Release: {release}</p>
      <p> SKU: {code} </p>
      <p> Size: {size} </p>
      <div className="edit-container">
        <label>Quantity: </label>
        <input
          type="number"
          name="quantity"
          className="edit"
          placeholder={quantity}
          disabled={lock}
          onChange={(e) => handleChange(e)}
        />
        <label>Price: </label>
        <input
          type="text"
          name="price"
          className="edit"
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
          onClick={(e) => deletePost(e.target.id)}
        >
          Delete
        </button>
      </div>
      <p>{msg}</p>
    </form>
  );
};

export default UserPost;
