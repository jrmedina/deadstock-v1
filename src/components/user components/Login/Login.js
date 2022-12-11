import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Login.css";

const Login = ({ users, login }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const checkLogin = () => {
    const user = users.find(
      (user) => username === user.username && user.password === password
    );
    user && login(user) 
  };


  return (
    <form className="Login">
      <h1>Log in</h1>
      <input
        className="username"
        type="username"
        placeholder="Username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        autoComplete="current-password"
        className="password"
        type="password"
     
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to={`/${username}/closet`}>
        <button
          className="general-button"
          type="button"
          onClick={checkLogin}
          disabled={!username || !password}
        >
          Log in
        </button>
      </Link>
      <p className="login-message">
        Visiting? <br />
        "username: dsUser password: shoes"
      </p>
    </form>
  );
};

export default Login;

Login.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.string,
      password: PropTypes.string,
      username: PropTypes.string,
    })
  ),
  login: PropTypes.func.isRequired,
};
