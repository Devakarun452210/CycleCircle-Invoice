import React, { useState } from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../data";
import ProductModal from "../../components/ProductModal/ProductModal";

const Products = () => {
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
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeProductModal = () => {
    setOpenModal(false);
  };

  const openProductModal = (data) => {
    setSelectedProduct(data);
    setOpenModal(!openModal);
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
        <div className="productContainer">
          {productsData.map((data) => (
            <div
              className="productCard"
              key={data.id}
              onClick={() => {
                openProductModal(data);
              }}
            >
              <img className="productImg" src={data.img} alt="" />
              <div className="pro">
                <div className="productDetails">
                  <span className="productName">{data.productName}</span>
                  <span className="productPrice">
                    &#8377;{data.productPrice}
                  </span>
                </div>
                <div className="productStock">
                  <span className="stock">Stock: {data.stock}</span>
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="modal">
          {openModal && (
            <ProductModal
              product={selectedProduct}
              onCloseModal={closeProductModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
