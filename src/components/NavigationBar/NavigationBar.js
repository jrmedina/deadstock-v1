import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";
import { ImHome3 } from "react-icons/im";
import { BiRun } from "react-icons/bi";
import "./NavigationBar.css";
import { fetchData } from "../../utils/apiCalls";

const NavigationBar = ({ user, handleInput, logout, setInventory}) => {
  const [input, setInput] = useState("");
  
const getCloset = () => {
  fetchData("inventory").then((data) => setInventory(data));

};

  const toBeDisplayed = user ? (
    <>
      <Link to={`/${user}/closet`}>
        <button aria-label="closet" className="nav closet" onClick={getCloset}>
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


  const handleChange = (input) => {
    setInput(input);
    handleInput(input);
  };

  const removeInput = () => {
    setInput("");
    handleInput("");
  };

  return (
    <div className="NavBar">
      <div className="header-container">
        <h1 className="header">DEADSTOCK</h1>
      </div>
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
            value={input}
            type="text"
            placeholder="search"
            onChange={(e) => handleChange(e.target.value)}
          />
          {input && <button onClick={removeInput}>x</button>}
        </nav>
      </Link>
    </div>
  );
};

export default NavigationBar;

NavigationBar.propTypes = {
  user: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
