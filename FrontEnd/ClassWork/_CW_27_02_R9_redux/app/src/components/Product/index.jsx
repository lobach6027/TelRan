import React from "react";
import { useDispatch } from "react-redux";
import { addToBasketAction } from "../../store/reducer/basketReducer";
import { deleteProductAction } from "../../store/reducer/productsReducer";

export default function Product({id, title,price,discount}) {
    const dispatch = useDispatch()
  return (
    <div>
      <p>TITLE:{title}</p>
      <p>PRICE:{price}</p>
      <p>DISCOUNT: {discount}</p>
      <button onClick={()=>dispatch(deleteProductAction(id))}>x</button>
      <button onClick={()=>dispatch(addToBasketAction(id))}>add to basket</button>
    </div>
  );
}
