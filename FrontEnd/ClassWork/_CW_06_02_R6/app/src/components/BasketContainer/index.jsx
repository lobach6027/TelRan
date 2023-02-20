import React from "react";
import BasketCalculation from "../BasketCalculation";
import BasketItem from "../BasketItem";
import s from './style.module.css'
export default function BasketContainer({ basket, increment, decrement,clearBasket, deleteItem}) {
  return (
    <div className={s.container}>
      <div className={s.basketCard}>
      {basket.map((item) => (
        <div ><BasketItem
        key={item.id}
        {...item}
        increment={increment}
        decrement={decrement}
        deleteItem = {deleteItem}
      /></div>
      ))}
      </div>
      <div><BasketCalculation basket = {basket} clearBasket = {clearBasket}/></div>
    </div>
  );
}
