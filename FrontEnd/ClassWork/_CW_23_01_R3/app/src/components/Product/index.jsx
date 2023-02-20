import React from "react";
import s from "./style.module.css";

export default function Product({
  id,
  title,
  price,
  deleteProduct,
  changePrice,
})


{
  return (
    <div className={[s.card, s.expensive].join(" ")}>
      <p className={price === 0 ? s.free : ""}>{title}</p>
      {/*{price === 0 ? <p className={s.free}>{title}</p> : <p>{title}</p>} */}
      <p>{price || "free"}</p>
      <button onClick={() => deleteProduct(id)}>delete</button>
      <button onClick={() => changePrice(id, 1000)}>+1000</button>
      {price === 0 ? (
        ""
      ) : (
        <button onClick={() => changePrice(id, -1000)}>-1000</button>
      )}
    </div>
  );
}
