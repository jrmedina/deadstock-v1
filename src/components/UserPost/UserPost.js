import React, { useState } from "react";
import "./UserPost.css";
import { Link } from "react-router-dom";
const UserPost = ({
  title,
  url,
  size,
  code,
  release,
  quantity,
  id,
  brand,
  update,
  user,
  deletePost,
}) => {
  console.log(deletePost);
  
  const [form, setForm] = useState(true);
  const [msg, setMsg] = useState("EDITING");
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
  });

  const handleClick = (e) => {
    e.preventDefault();
    setForm(false);
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
    setForm(true);
    setMsg("SAVED!");
  };

  const button = form ? (
    <button id={id} onClick={handleClick}>
      Edit
    </button>
  ) : (
    <button id={id} onClick={save}>
      Save
    </button>
  );

  return (
    <form className="UserPost">
      <img src={url} className="lgimage" alt={title} />
      <h4 className="title">{title}</h4>
      <p>Release: {release}</p>
      <p> SKU: {code} </p>

      <label>Size: </label>
      <input
        name="size"
        className="edit"
        placeholder={size}
        disabled={form}
        onChange={(e) => handleChange(e)}
      />

      <label>Quantity:</label>
      <input
        type="text"
        name="quantity"
        className="edit"
        placeholder={quantity}
        disabled={form}
        onChange={(e) => handleChange(e)}
      />

      {button}
      <Link to={`/`}>
        <button id={id} onClick={(e) => deletePost(e.target.id)}>
          Delete
        </button>
      </Link>
      <p>{msg}</p>
    </form>
  );
};

export default UserPost;
