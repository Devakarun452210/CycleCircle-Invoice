import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const toDashboard = () => {
    navigate("/maindashboard");
  };
  const toInvoice = () => {
    navigate("/invoice");
  };
  const toProducts = () => {
    navigate("/products");
  };
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="pages">
          <span onClick={toDashboard} className="menu">
            Dashboard
          </span>
          <span onClick={toInvoice} className="menu">
            Invoice
          </span>
          <span onClick={toProducts} className="menu">
            Products
          </span>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default Dashboard;
