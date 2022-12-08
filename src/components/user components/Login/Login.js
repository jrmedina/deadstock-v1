import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Login.css";

const Login = ({ users, login }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState("username: dsUser password: shoes");

  const checkLogin = () => {
    const user = users.find(
      (user) => username === user.username && user.password === password
    );
    user ? login(user) : setMsg(true);
  };

  return (
    <div className="Login">
      <h1>Log in</h1>
      <input
        className="username"
        type="username"
        placeholder="Username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="password"
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to={`/${username}/closet`}>
        <button className="general-button" type="button" onClick={checkLogin}>
          Log in
        </button>
      </Link>
      <p className="login-message">Visiting? <br/>{msg}</p>
    </div>
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
