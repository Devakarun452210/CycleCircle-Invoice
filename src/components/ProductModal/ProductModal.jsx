import React from "react";
import "./ProductModal.css";

const ProductModal = (props) => {
  const { img, productName, productPrice, desc } = props.product;

  const handleCloseModal = () => {
    props.onCloseModal();
  };

  return (
    <div className="productModalBg" onClick={handleCloseModal}>
      <div className="productModalContainer">
        <img className="modalImg" src={img} alt="" />
        <div className="modalDetails">
          <div className="ModalproductDetails">
            <span className="modalProductName">{productName}</span>
            <span className="modalPrice">&#8377; {productPrice}</span>
          </div>
          <p className="modalDesc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            illo rerum repellendus fugiat, ratione numquam adipisci ea
            architecto quod soluta hic sequi unde et magni dignissimos fugit
            quis natus? Fuga error repellat a iusto porro hic doloribus sunt!
            Ad, iure! Quo enim odio a quia libero nesciunt numquam totam
            excepturi?
          </p>
        </div>
        <button className="closeBtn" onClick={handleCloseModal}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
