import React from "react";
import s from './style.module.css'

export default function Card({ id, img, title, model, price, count, addToCard,showCart }) {
  return (
    <div className={s.container}>
      <img src={img} className = {s.pict} alt="Razer" />
      <div className={s.info}>
        <h3>{title}</h3>
        <p>{model}</p>
        <p>Price: {price} $</p>
        <p>Amount: {count}</p>
        <button className={s.button} onClick = {()=>addToCard(id,showCart)}> Add to cart</button>
      </div>
    </div>
  );
}
