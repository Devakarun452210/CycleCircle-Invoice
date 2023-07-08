import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const logintodashboard = () => {
    navigate("/maindashboard");
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <h3 className="loginContainerHeading">Login</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="loginBtn" onClick={logintodashboard}>
          Login
        </button>
        <div className="sign">
          <span>Not Register? </span>
          <Link className="link" to={"/signup"}>
            <span className="signUp">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
