import React from "react";
import s from "./style.module.css";
export default function BasketCalculation({ basket, clearBasket }) {
  const amount = basket.reduce((prev, item) => prev + item.count, 0);
  const total = basket.reduce(
    (prev, { count, price }) => prev + count * price,
    0
  );
  return (
    <div className={s.block}>
      <p> Total count: {amount}</p>
      <p>Total price: {total} $</p>
      <button onClick={clearBasket}>Clear basket</button>
    </div>
  );
}
