import React, { useEffect, useState } from "react";
import "./DetailedView.css";
import { TemporaryDrawer } from "../MUI/Drawer";
import { useParams } from "react-router-dom";
import { fetchPair } from "../../utils/apiCalls";

const DetailedView = ({passed}) => {

  const { id } = useParams();
  const [pair, setPair] = useState();

  useEffect(() => {
    passed ? setPair(passed) : fetchPair(id).then((data) => setPair(data));
  }, [passed, id]);

  return (
    pair && (
      <div className="Enlarged">
        <h1 className="el-title">{pair.title}</h1>
        <div className="el-container">
          <img src={pair.url} alt={pair.title} className="el-image" />
          <div className="details">
            <p>Color(s): {pair.colors}</p>
            <p>Size: {pair.size}</p>
            <p>Release Date: {pair.release}</p>
            <p>Quantity: {pair.quantity}</p>
            <p>Brand: {pair.brand}</p>
            <p>SKU: {pair.code}</p>
            <p>Seller: {pair.user}</p>
            <p>Price: ${pair.price} USD</p>
          </div>
        </div>
        <TemporaryDrawer
          contact={pair.contact}
          title={pair.title}
          user={pair.user}
        />
      </div>
    )
  );
};

export default DetailedView;
