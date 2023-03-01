import React from "react";
import { useSelector } from "react-redux";
import Product from "../Product";

export default function ProductList() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      {products.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}
