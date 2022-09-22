import React, { useState } from "react";
import MiniPost from "../MiniPost/MiniPost";
import "./RecentlyAdded.css";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const RecentlyAdded = ({ inventory }) => {
  const [slide, setSlide] = useState(0);

  const toBeDisplayed = inventory.map((shoe, index) => {
    return (
      <div key={shoe.id} className={index === slide ? "slide active" : "slide"}>
        {index === slide && (
          <MiniPost
            title={shoe.title}
            size={shoe.size}
            image={shoe.url}
            id={shoe.id}
          />
        )}
      </div>
    );
  });

  const handleSlide = (e) => {
    e.target.id === "left"
      ? setSlide(slide === inventory.length - 1 ? 0 : slide + 1)
      : setSlide(slide === 0 ? inventory.length - 1 : slide - 1);
  };

  return (
    <div className="recent">
      <h3 className="added">recently added:</h3>
      <div className="slider">
        <button className="left" id="left" onClick={handleSlide}>
          <IoMdArrowRoundBack />
        </button>
        <button className="right" id="right" onClick={handleSlide}>
          <IoMdArrowRoundForward />
        </button>
        {toBeDisplayed}
      </div>
    </div>
  );
};

export default RecentlyAdded;
