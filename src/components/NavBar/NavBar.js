import React from "react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";
import { ImHome3 } from "react-icons/im";
import { BiRun } from "react-icons/bi";
import { FaSearchengin } from "react-icons/fa";
import "./NavBar.css";

const NavBar = ({ user, handleInput, logout }) => {
  const toBeDisplayed = user ? (
    <>
      <Link to={`/${user}/closet`}>
        <button className="nav closet">
          <GiRunningShoe />
        </button>
      </Link>
      <Link to={`/`}>
        <button className="nav logout">
          <BiRun onClick={logout} />
        </button>
      </Link>
    </>
  ) : (
    <Link to={`/login`}>
      <button className="nav login">
        <MdLogin />
      </button>
    </Link>
  );

  return (
    <div className="NavBar">
      <h1 className="header">DEADSTOCK</h1>
      <div className="constant">
        <Link to={`/`}>
          <button className="nav home">
            <ImHome3 />
          </button>
        </Link>
        <Link to={`/all`}>
          <button className="nav all">all</button>
        </Link>

        {toBeDisplayed}
      </div>
      <Link to={"/"}>
        <nav className="search-box">
          <input
            className="input inputSearch"
            name="input"
            type="text"
            placeholder="search"
            onChange={(e) => handleInput(e.target.value)}
          />

          <FaSearchengin />
     
        </nav>
      </Link>
    </div>
  );
};

export default NavBar;
