import React, { useState } from "react";
import MiniPost from "../MiniPost/MiniPost";
import "./RecentlyAdded.css";

const RecentlyAdded = ({ inventory }) => {
  const [slide, setSlide] = useState(0);

  const toBeDisplayed = inventory.map((shoe, index) => {
    return (
      <div key={shoe.id} className={index === slide ? "slide active" : "slide"}>
        {index === slide && (
          <MiniPost title={shoe.title} size={shoe.size} image={shoe.url} />
        )}
      </div>
    );
  });

  const nextSlide = () => {
    setSlide(slide === inventory.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? inventory.length - 1 : slide - 1);
  };

  return (
    <section className="slider">
      <button className="left" onClick={prevSlide}>
        LEFT
      </button>
      <button className="right" onClick={nextSlide}>
        RIGHT
      </button>
      {toBeDisplayed}
    </section>
  );
};

export default RecentlyAdded;
