import React from "react";
import s from "./style.module.css";

export default function BasketItem({id, title, price, count, increment, decrement,deleteItem }) {
  return (
    <div className={s.cardBasket}>
      <p>{title}</p>
      <p>PRICE: {price} $ </p>
      <div className={s.changeCount}>
        COUNT:
        <button onClick = {()=>decrement(id)}>-</button>
        <p>{count}</p>
        <button onClick = {()=>increment(id)}>+</button>
        <button onClick = {()=> deleteItem(id)}>x</button>
      </div>
    </div>
  );
}
