import React, { useState } from "react";
import "./CreatePost.css";


const CreatePost = ({ addPost }) => {
  const [newPost, setPost] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...newPost, [name]: value });
  };
  const onImageChange = (event) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      let img = event.target.files[0];
      setPost({ ...newPost, [name]: URL.createObjectURL(img) });
    }
  };

  const save = () => {
    addPost(newPost);
  };

  return (
    <div className="CreatePost">
      <form className="postForm">
        <h2>CREATE A POST</h2>
        <input type="file" name="url" onChange={onImageChange} />
        <label>TITLE:</label>
        <input
          name="title"
          type="text"
          placeholder="Name of shoe"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <label>SIZE:</label>
        <input
          name="size"
          type="number"
          step=".5"
          placeholder="Size"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <label>RELEASE:</label>
        <input
          name="release"
          type="date"
          placeholder="Release"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <label>BRAND:</label>
        <input
          name="brand"
          type="text"
          placeholder="Brand"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <label>SKU:</label>
        <input
          name="code"
          type="text"
          placeholder="sku"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <label>PRICE:</label>
        <input
          name="price"
          type="text"
          placeholder="PRICE"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <label>QUANTITY:</label>
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <label>COLOR:</label>
        <input
          name="colors"
          type="text"
          placeholder="Color"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <button className="save-btn" type="button" onClick={save}>
          SAVE
        </button>
      </form>

      <div className="newPost">
        <img src={newPost.url} width={"250px"} alt={newPost.title} />
        <p>TITLE: {newPost.title}</p>
        <p>SIZE: {newPost.size}</p>
        <p>RELEASE: {newPost.release}</p>
        <p>BRAND: {newPost.brand}</p>
        <p>SKU: {newPost.code}</p>
        <p>PRICE: {newPost.price}</p>
        <p>QUANTITY: {newPost.quantity}</p>
        <p>COLOR: {newPost.colors}</p>
      </div>
    </div>
  );
};

export default CreatePost;

