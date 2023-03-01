import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementtAction,
  deleteAction,
  incrementAction,
} from "../../store/reducer/basketReducer";
import s from "./style.module.css";
export default function BasketItem({ id, count, title, price, discount }) {
  const dispatch = useDispatch();

  const discPrice = price - ((price * discount) / 100).toFixed(2);
  return (
    <div className={s.basketItem}>
      <p>TITLE: {title}</p>
      <p>OLD PRICE: {price}</p>
      <p>NEW PRICE: {discPrice} $</p>
      <p>
        TOTAL PRICE: {discPrice}x{count} = {discPrice * count} $
      </p>
      <p>COUNT: {count}</p>

      <div className={s.btnsContainer}>
        <button onClick={() => dispatch(incrementAction(id))}>+</button>
        <button onClick={() => dispatch(decrementtAction(id))}>-</button>
      </div>
      <button onClick={() => dispatch(deleteAction(id))}>DELETE</button>
    </div>
  );
}
