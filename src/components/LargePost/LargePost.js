import React, { useState } from "react";
import "./LargePost.css";

const LargePost = ({
  title,
  url,
  size,
  code,
  release,
  quantity,
  id,
  brand,
  update,
  user
}) => {


  const [form, setForm] = useState(true);
  const [post, setPost] = useState({
    title: title ,
    url:  url ,
    size:  size ,
    code:  code ,
    release:  release ,
    quantity:  quantity ,
    id:  id ,
    brand: brand ,
    user: user
  });

  const handleClick = (e) => {
    e.preventDefault();
    setForm(!form);
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

  };
  return (
    <form className="LargePost">
      <img src={url} className="lgimage" alt={title} />
      <h3 className="title">{title}</h3>
      <p>Release:{release}</p>
      <p> SKU: {code} </p>
      <label>Size:</label>
      <input
        name="size"
        className="size"
        placeholder={size}
        disabled={form}
        onChange={(e) => handleChange(e)}
      />

      <label>Quantity:</label>
      <input
        type="text"
        name="quantity"
        placeholder={quantity}
        disabled={form}
        onChange={(e) => handleChange(e)}
      />
       {form &&
      <button id={id} onClick={handleClick}>
        Edit
      </button>
}
      {!form && (
        <button id={id} onClick={save}>
          Save
        </button>
      )}
    </form>
  );
};

export default LargePost;
