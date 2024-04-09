import React from "react";
import SingleProduct from "./SingleProduct";
import featuredProducts from "./data/featuredProduct"
import products from "./data/products"

function Products() {
  let data = {
    title: "Products",
  };
  return (
    <>
      <div className="main-products">

        <h1 className="product-main">{data.title}</h1>
        <span className="product-list" id="Setion1">⟫ Featured Products </span>
        <div className="products">
          {featuredProducts.map((el) => {
            return <SingleProduct product={el} />;
          })}
        </div>
      </div>
      <div>

        <span className="product-list" id="Section2">⟫ All Products </span>
        <div className="products">
          {products.map((el) => {
            return <SingleProduct product={el} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Products;