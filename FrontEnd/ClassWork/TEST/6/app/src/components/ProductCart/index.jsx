import React, { useState } from "react";
import s from "./style.module.css";

export default function ProductCart({ id, title, price, description, images }) {



  const [index, setIndex] = useState(0);
  const changeImg = () => {
    console.log(images.length)
    if (images.length===1){
      setIndex(0)
    }else if (index+1 === images.length) {
      setIndex(index - 1);
    } else {
      setIndex(index + 1);
    }
  };
  let image = images[index];

  return (
    <div className={s.card}>
      <img onClick={changeImg} src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: {price} $</p>
    </div>
  );
}
