import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = ({ checkLogin }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const check = () => {
    checkLogin(username, password);
  };

  return (
    <div>
      <h3>Username:</h3>
      <input
        className="username"
        type="text"
        placeholder="Username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <h3>Password:</h3>
      <input
        className="password"
        type="text"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
       <Link to={`/${username}/closet`}>
      <button type="button" onClick={check}>
        Login
      </button>
      </Link>
    </div>
  );
};

export default Login;
