import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import SignupModal from "../../components/SignupModal/SignupModal";

const Signup = () => {
  const [openModal, setOpenModal] = useState(false);

  const openProductModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="login">
      {openModal && SignupModal}
      <div className="loginContainer">
        <h3 className="loginContainerHeading">Sign Up</h3>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="loginBtn" onClick={openProductModal}>
          Sign Up
        </button>
        <div className="sign">
          <span>Already have an account </span>
          <Link className="link" to={"/"}>
            <span className="signUp">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
