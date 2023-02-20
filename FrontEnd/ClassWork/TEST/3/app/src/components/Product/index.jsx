import React from 'react'
import s from './style.module.css'

export default function Product({id, title, price, deleteProduct}) {
    console.log(deleteProduct)
  return (
    <div className={s.card}>
        <h4>{title}</h4>
        <p><span>Price: </span>{price} $</p>
        <button onClick = {()=>deleteProduct(id)}>delete</button>
    </div>
  )
}
