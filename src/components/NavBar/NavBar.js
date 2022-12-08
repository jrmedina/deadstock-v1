import React from "react";
import PropTypes from "prop-types";
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
        <button aria-label="closet" className="nav closet">
          <GiRunningShoe />
        </button>
      </Link>
      <Link to={`/`}>
        <button aria-label="logout" className="nav logout">
          <BiRun onClick={logout} />
        </button>
      </Link>
    </>
  ) : (
    <Link to={`/login`}>
      <button aria-label="login" className="nav login">
        <MdLogin />
      </button>
    </Link>
  );

  return (
    <div className="NavBar">
      <h1 className="header">DEADSTOCK</h1>
      <div className="constant">
        <Link to={`/`}>
          <button aria-label="home" className="nav home">
            <ImHome3 />
          </button>
        </Link>

        <Link to={`/all`}>
          <button aria-label="all" className="nav all">
            all
          </button>
        </Link>
        {toBeDisplayed}
      </div>
      <Link to={"/"} className="search-container">
        <nav className="search-box">
          <input
            className="input"
            name="input"
            type="text"
            placeholder="search"
            onChange={(e) => handleInput(e.target.value)}
          />
          <FaSearchengin/>
        </nav>
      
      </Link>
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  user: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
