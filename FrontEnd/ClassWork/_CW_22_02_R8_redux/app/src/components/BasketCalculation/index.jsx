import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'

export default function BasketCalculation() {
    const basket = useSelector(state=>state.basket)
    const products = useSelector(state => state.products)
const count = basket.reduce((prev,item)=>prev+item.count,0)

const basketDescr = basket.map((item)=>{
    const product = products.find(({id})=>id===item.id)
    return {...item, ...product}
  })

const totalPrice = basketDescr.reduce((prev,{price,discount,count})=> prev + (price - (price*discount/100).toFixed(2))*count,0

)
const totalDiscount = basketDescr.reduce((prev,{price,discount,count})=> prev+ (price*discount/100).toFixed(2)*count,0)
  return (
    <div className={s.calculationContainer}>
        <p> TOTAL COUNT: {count}</p>
        <p>TOTAL PRICE: {totalPrice} $</p>
        <p>TOTAL DISCOUNT: {totalDiscount} $</p>
    </div>
  )
}
