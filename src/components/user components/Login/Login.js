import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ({ checkLogin }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const check = () => {
    checkLogin(username, password);
  };

  return (
    <div className="Login">
      <h1>Log in</h1>
      <input
        className="username"
        type="text"
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
        <button type="button" onClick={check}>
          Log in
        </button>
      </Link>
    </div>
  );
};

export default Login;
