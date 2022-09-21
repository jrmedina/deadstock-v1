import React from "react";
import LargePost from "../LargePost/LargePost";
import "./Closet.css"

const Closet = ({closet, update}) => {


  const largePosts = closet.map((shoe) => (
    <LargePost
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
    />
  ));
  return <div className="Closet">{largePosts}</div>;
};

export default Closet;
