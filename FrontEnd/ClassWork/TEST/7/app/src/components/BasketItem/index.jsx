import React from "react";
import s from "./style.module.css";

export default function BasketItem({
  title,
  id,
  price,
  count,
  increment,
  decrement,
  deleteBasketItem,
}) {
  return (
    <div className={s.card}>
  
        <h4>{title}</h4>
    
      <div className={s.info}>
        <p> Price: {price} $</p>
        <div className={s.btns_container}>
          <p>Amount: </p>
          <button onClick={() => decrement(id)}>-</button>
          <p>{count}</p>
          <button onClick={() => increment(id)}>+</button>
          <button onClick={() => deleteBasketItem(id)}>Delete item</button>
        </div>
      </div>
    </div>
  );
}
