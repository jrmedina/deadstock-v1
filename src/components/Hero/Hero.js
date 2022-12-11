import React, { useState } from "react";
import PropTypes from "prop-types";
import MiniPost from "../MiniPost/MiniPost";
import "./Hero.css";
import { formatData } from "../../utils/formatData";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Hero = ({ inventory }) => {
  const recent = inventory
    .slice(-5)
    .reverse()
    .map((shoe) => formatData(shoe));
  const [slide, setSlide] = useState(0);

  const toBeDisplayed = recent.map((shoe, index) => {
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
      ? setSlide(slide === recent.length - 1 ? 0 : slide + 1)
      : setSlide(slide === 0 ? recent.length - 1 : slide - 1);
  };

  return (
    <div className="recent">
      <h2 className="added">recently added:</h2>
      <div className="slider">
        <button
          aria-label="left"
          className="left slide-btn"
          id="left"
          onClick={handleSlide}
        >
          <IoMdArrowRoundBack />
        </button>
        <button
          aria-label="right"
          className="right slide-btn"
          id="right"
          onClick={handleSlide}
        >
          <IoMdArrowRoundForward />
        </button>
        {toBeDisplayed}
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  inventory: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string,
      code: PropTypes.string,
      contact: PropTypes.string,
      id: PropTypes.number,
      release: PropTypes.string,
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      url: PropTypes.string,
      user: PropTypes.string,
    })
  ).isRequired,
};
