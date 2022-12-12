import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Login.css";

const Login = ({ login }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

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
          onClick={() => login(username, password)}
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
  login: PropTypes.func.isRequired,
};
