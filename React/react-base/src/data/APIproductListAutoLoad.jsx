import axios from "axios";
import React, { useEffect, useState } from "react";

export default function APIproductListAutoLoad() {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = () => {
    setisLoading(true);

    let url = `https://dummyjson.com/products/search?q=${searchTerm}`;
    axios.get(url).then((res) => {
      // console.log(res.data.products);
      setProducts(res.data.products);
      setisLoading(false);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]); // dependency array

  return (
    <>
      {" "}
      {/* NEed to fetch api automatically after loading screen */}
      <button onClick={fetchProducts}>fetch product</button>
      {isLoading && <p>Loading...</p>}
      <input
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="search"
      />
      <ul>
        {products.map((el, idx) => {
          return <li key={idx}>{el.title}</li>;
        })}
      </ul>
    </>
  );
}
