import React from "react";
import UserPost from "../UserPost/UserPost";
import "./Closet.css";
import { Link } from "react-router-dom";

const Closet = ({ closet, update, deletePost}) => {

const toBeDisplayed = closet.length ?
closet.map((shoe) => (
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
      
    />
  )) : <h2>Looks like we need to add some shoes..</h2>
  return <div className="Closet">
     <Link to={`/createpost`}>
    <button>
      add shoes
    </button>
     </Link>
    
    {toBeDisplayed}
    
    </div>;
};

export default Closet;
