import s from "./style.module.css";

export default function Product({
  id,
  title,
  description,
  price,
  images,
  deleteProduct,
  addProduct,
  imageIndex,
  changeFoto
}) 
{


  return (
    <div className={s.card}>
        <div onClick={()=>changeFoto(id)}><img src={images[imageIndex%images.length]} alt={title} /></div>
      <div className={s.info}>
        <p>{title}</p>
        <p>{description}</p>
        <div className={s.price_block}>
          <p> Price: {price} $</p>
          <div className={s.btns}>
            <button onClick={() => addProduct(id)}>add to cart</button>
            <button onClick={() => deleteProduct(id)}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
/*import React, { useState } from "react";
import s from "./style.module.css";

export default function ProductCart({ id, title, price, description, images }) {

function showImg(arr){ for(let i=0, i<arr.length, i++){{console.log(arr.)}}

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
 */
