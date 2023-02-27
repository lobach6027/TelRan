import React from "react";
import { useDispatch } from "react-redux";

export default function Product({id, title, price, discount}) {
    const dispatch = useDispatch()
  return (
    <div>
      <div>
      <p>{id}</p> 
      <p>{title}</p>
      <p>{price}</p>
      <p>{discount}</p>
      </div>
      <button onClick = {()=>dispatch({type:"DELETE",payload:id})}>Delete</button>
    </div>
  );
}
