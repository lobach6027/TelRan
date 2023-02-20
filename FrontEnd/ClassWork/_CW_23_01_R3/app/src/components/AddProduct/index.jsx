import React from "react";
import s from "./style.module.css";

export default function AddProduct({createProduct}) {
  const onSubmit = (event) => {
    event.preventDefault();
    const { title, price } = event.target;
    
    createProduct(title.value, +price.value);
    title.value = "";
    price.value = "";

  };

  return (

      <form className={s.form} onSubmit={onSubmit} >
        <input type="text" placeholder="Title" name="title" />
        <input type="number" placeholder="Price" name="price" />
        <button >Add</button>
      </form>
   
  );
}
