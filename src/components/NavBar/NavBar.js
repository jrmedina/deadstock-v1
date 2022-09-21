import React from "react";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div>
      <h1>DEADSTOCK</h1>
      <Link to={`/login`}>
        <button>LOG IN</button>
      </Link>
    </div>
  );
};

export default NavBar;
