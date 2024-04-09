import React from "react";

export default function SingleProduct(props) {
  let product = props.product;
  return (
    <div className="card-product" key={product.id}>
      <img src={product.thumbnail} /> <br />
      <div className="card-product-desc">


        <span className="title">{product.title}</span> <br />
        <span className="rating">⭐{product.rating}/5 ‣ ({product.stock} Stock)</span> <br />
        <span className="delivery">Free Delivery</span> <br />
        <span className="price">${product.price} </span>
        <span className="discountPercentage"><s>{product.discountPercentage}</s>% off</span> <br />

        <span className="badge , capitalize ">{product.category}</span>

      </div>
    </div>
  );
}