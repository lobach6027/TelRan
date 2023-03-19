import React from "react";
import s from './style.module.css'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ProductItem({ id, title, price, image }) {
  return (
    <div className={s.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <div>PRICE: {price} $</div>
      <button className={s.addToBasket}> <FontAwesomeIcon icon = {faCartPlus} /></button>
    </div>
  );
}
