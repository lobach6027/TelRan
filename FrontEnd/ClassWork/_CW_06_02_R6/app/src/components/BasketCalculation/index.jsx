import React from "react";
import s from "./style.module.css";
export default function BasketCalculation({ basket, clearBasket }) {
  const fullPrice = basket.reduce(
    (prev, { price, count }) => prev + price * count,
    0
  );
 
  const fullCount = basket.reduce((prev, { count }) => prev + count, 0);
  return (
    <div className={s.fullPrice}>
      <div>
        <h3>Total price: {fullPrice} $</h3>
        <p>Total count: {fullCount}</p>
      </div>
      <button onClick={() => clearBasket()}>Clear card</button>
    </div>
  );
}
