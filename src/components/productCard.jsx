import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={item?.img} />
      <div>{item?.choice ? "Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>${item?.price}</div>
      <div>{item?.new == true ? "신제품" : " "}</div>
    </div>
  );
};

export default ProductCard;
