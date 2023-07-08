import React from "react";
import "./SignupModal.css";
import { Link } from "react-router-dom";
import tick from "../../img/Tick.png";

const SignupModal = () => {
  return (
    <div className="signupModalBg">
      <div className="signupModalContainer">
        <img className="signupModalImg" src={tick} alt="" />
        <span className="signupmoto">Register Successfully</span>
        <Link className="link" to={"/"}>
          <button className="signuptologin">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default SignupModal;
