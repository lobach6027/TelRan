import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import s from "./style.module.css";

export default function ProductsPage() {
  const products = useSelector((state) => state.products);
  const { category } = useParams();
  const categoryProducts = products.filter(
    (item) => item.category === category
  );
console.log(category)

  return (
    <div>
      {category === undefined ? (
        <div className={s.container}>
          {products.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div>
          {category}
          {categoryProducts.map((item) => (
             <ProductItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
