import React from 'react'
import s from './style.module.css'
export default function AddProduct() {

const onSubmmit = e =>{
    e.preventDefault();
    const {title,price} = e.target
    console.log(title.value,price.value)
    title.value = '' 
    price.value = ''
}


  return (
    <form className={s.form} onSabmit = {onSubmmit}>
<input type="text" placeholder='title' name = 'title'/>
<input type="number" placeholder='price' name='price' />
<button>Add</button>
    </form>
  )
}
