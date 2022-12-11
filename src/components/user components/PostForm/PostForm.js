import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PostForm.css";
import Enlarged from "../../DetailedView/DetailedView";
import { BasicModal } from "../../MUI/Modal";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

const PostForm = ({ addPost, user, contact }) => {
  const [newPost, setPost] = useState({
    user: user,
    quantity: 1,
    contact: contact,
  });
  const [status, setStatus] = useState("");

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

  // ----------------------------------------------------------------
  const postPost = () => {
    let newPost1 =   {
    title: "Union",
    release: "11/17/2018",
    colors: ["WHITE", "BLACK-VARSITY", "RED", "WOLF GREY"],
    brand: "Jordan",
    size: 9.5,
    quantity: 1,
    url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/014/557/original/466842_01.jpg.jpeg?action=crop&width=2000",
    code: "BV1300-106",
    user: "dsJosh",
    id: 1,
    contact: "ndgns2@gmail.com",
    price: "10.0",
  }

    return fetch("http://localhost:3001/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost1),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    // if (post.ok) {
    //   return post.json();
    // } else {
    //   throw Error(post.status.Text);
    // }
    // })
    // .catch((error) => console.log(error));
  };

  // ----------------------------------------------------------------

  // const handleClick = () => {
  //   if (Object.keys(newPost).length > 8) {
  //     addPost({ ...newPost, id: Date.now() });
  //     setStatus("SAVED!");
  //   } else {
  //     setStatus("missing fields");
  //   }
  // };

  return (
    <div className="CreatePost">
      <form className="postForm">
        <div className="back-container">
          <Link to={`/${user}/closet`}>
            <AiOutlineRollback className="back" />
          </Link>
        </div>
        <h2>CREATE A POST</h2>
        <input type="file" name="url" onChange={onImageChange} />
        <label>NAME of SHOE:</label>
        <input
          name="title"
          type="text"
          placeholder="Name"
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
          placeholder="SKU"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <label>PRICE:</label>
        <input
          name="price"
          type="text"
          placeholder="Price"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />

        <label>COLOR(S):</label>
        <input
          name="colors"
          type="text"
          placeholder="Color"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <BasicModal preview={<Enlarged pair={newPost} />} />
        <p className="status">{status}</p>

        <button className="save-btn" type="button" onClick={postPost}>
          SAVE
        </button>
      </form>
    </div>
  );
};

export default PostForm;

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};
