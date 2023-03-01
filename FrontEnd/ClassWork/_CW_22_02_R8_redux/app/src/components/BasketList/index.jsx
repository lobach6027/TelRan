import React from 'react'
import { useSelector } from 'react-redux'
import BasketItem from '../BasketItem'
import s from "./style.module.css"

export default function BasketList() {
    const basket = useSelector(state=>state.basket)
const products = useSelector(state => state.products)

const basketDescr = basket.map((item)=>{
  const product = products.find(({id})=>id===item.id)
  return {...item, ...product}
})
console.log(basketDescr)

  return (
   <div>
     <div className={s.basketContainer}>{basketDescr.map((item)=><BasketItem key={item.id} {...item}/>)}</div>
   </div>
  )
}
