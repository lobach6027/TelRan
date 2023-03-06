import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem";
import s from "./style.module.css";

export default function BasketList() {
  const basket = useSelector((state) => state.basket);
  const products = useSelector((state) => state.product);

  const basketDescr = basket.map((item) => {
    const product = products.find(({ id }) => item.id === id);
    return { ...item, ...product };
  });
  console.log(basket);
  console.log(products);
  return (
    <div className={s.basketContainer}>
      <h2>Basket</h2>
      {basketDescr.map((item) => (
        <BasketItem key={item.id} {...item} />
      ))}
    </div>
  );
}
