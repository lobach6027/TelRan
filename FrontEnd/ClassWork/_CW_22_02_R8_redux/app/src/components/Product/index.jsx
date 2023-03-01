import React from "react";
import { useDispatch} from "react-redux";
import { addToBasketAction } from "../../store/reducer/basketReducer";
import { deleteProductAction } from "../../store/reducer/clickerDeducer";

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
      <button onClick = {()=>dispatch(deleteProductAction(id))}>Delete</button>
      <button onClick={()=>dispatch(addToBasketAction(id))}>Add to basket</button>
    </div>
  );
}
