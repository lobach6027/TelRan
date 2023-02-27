import React from "react";
import s from "./style.module.css";

export default function Product({
  id,
  title,
  description,
  price,
  images,
  deleteProduct,
  addToBasket,
  indexNumber,
  changeFoto
}) {
  console.log(indexNumber%images.length)
  return (
    <div className={s.card}>
      <div onMouseEnter={()=>changeFoto(id)}><img   src={images[indexNumber%images.length]} alt={title} /></div>
      



      <div className={s.info}>
        <h3>{title}</h3>
        <p className={s.descr}>{description}</p>
        <div className={s.price_block}>
        <p> Price: {price} $</p>
        <div className={s.btns}>
          <button onClick={() => deleteProduct(id)}>Delete</button>
          <button onClick={() => addToBasket(id)}>Add</button>
        </div>
        </div>
      </div>
    </div>
  );
}
