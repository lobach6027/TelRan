import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  decrementAction,
  incrementAction,
  removeAction,
} from "../../store/reducer/basketReducer";
export default function BasketItem({ id, count, title,price}) {
  const dispatch = useDispatch();
  return (
    <div className={s.basketCard}>
      <span> TITLE:{title}</span>
      <span>PRICE: {price}</span>
      <div className={s.countContainer}>
        Count:
        <button onClick={() => dispatch(incrementAction(id))}>+</button>
        <span> {count} </span>
        <button onClick={() => dispatch(decrementAction(id))}>-</button>
      </div>
      <button onClick={()=>{dispatch(removeAction(id))}}>delete</button>
    </div>
  );
}
