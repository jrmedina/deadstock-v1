import React from "react";
import { Link } from "react-router-dom";
import magnify from "../../assets/search.png";
import { MdLogin } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";
import { ImHome3 } from "react-icons/im";
import "./NavBar.css";

const NavBar = ({ user, handleInput }) => {
const toBeDisplayed = user ? (
  <Link to={`/${user}/closet`}>
    <button className="nav">
      <GiRunningShoe />
    </button>
  </Link>
) : (
  <Link to={`/login`}>
    <button className="nav">
      <MdLogin />
    </button>
  </Link>
);
  
  return (
    <div className="NavBar">
      <h1 className="header">DEADSTOCK</h1>
      <Link to={`/`}>
        <button className="nav">
          <ImHome3 />
        </button>
      </Link>
      <Link to={`/all`}>
        <button className="nav">
          all
        </button>
      </Link>
      {toBeDisplayed}

      <Link to={"/"}>
        <nav className="search-box">
          <input
            className="input"
            name="input"
            type="text"
            placeholder="search"
            onChange={(e) => handleInput(e.target.value)}
          />
          <img className="magnify" src={magnify} alt="magnify" />
        </nav>
      </Link>
    </div>
  );
};

export default NavBar;
