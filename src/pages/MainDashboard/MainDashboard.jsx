import React from "react";
import "./MainDashboard.css";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../data";

const MainDashboard = () => {
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

  const noOfProduct = productsData.length;

  const productTotal = productsData.reduce(
    (total, product) => total + product.productPrice,
    0
  );

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
        <div className="dashboardElements">
          <div className="dashboardProduct" onClick={toProducts}>
            <div className="dashboardProductContent">
              <i className="fa fa-shop productIcon"></i>
              <span className="dashboardname">Product</span>
              <span className="productAmnt">{noOfProduct}</span>
            </div>
          </div>
          <div className="dashboardAmount">
            <div className="dashboardProductContent">
              <i className="fa fa-money productIcon"></i>
              <span className="dashboardname">Amount</span>
              <span className="productAmnt">&#8377;{productTotal}</span>
            </div>
          </div>
          <div className="dashboardInvoices" onClick={toInvoice}>
            <div className="dashboardProductContent">
              <i className="fa-solid fa-file-invoice productIcon"></i>
              <span className="dashboardname">Invoices</span>
              <span className="productAmnt">&#8377;1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
