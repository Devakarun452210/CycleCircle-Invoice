import React from "react";
import "./Invoice.css";
import { useNavigate } from "react-router-dom";
import InvoiceApp from "./invoicer/InvoiceApp";

const Invoice = () => {
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
            <i className="fa fa-home"></i>
            Dashboard
          </span>
          <span onClick={toInvoice} className="menu">
            <i class="fa-solid fa-file-invoice"></i>
            Invoice
          </span>
          <span onClick={toProducts} className="menu">
            <i class="fa-solid fa-bag-shopping"></i>
            Products
          </span>
        </div>
      </div>
      <div className="main">
        <InvoiceApp />
      </div>
    </div>
  );
};

export default Invoice;
