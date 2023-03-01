import React from "react";
import { useDispatch } from "react-redux";

export default function Product({id, title,price,discount}) {
    const dispatch = useDispatch()
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <p>{discount}</p>
      <button onClick={()=>dispatch({type:"DELETE",payload:id})}>x</button>
      <button onClick={()=>dispatch({type:"ADDTOBASKET", payload:id})}>add to basket</button>
    </div>
  );
}
