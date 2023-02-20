import React from 'react'
import s from './style.module.css'

export default function Card({id,title,price, deleteProduct,changePrice}) {
  return (
    <div className={[s.card,price>2000 ? s.exp : ''].join(' ')}>
        <div>
            <p className ={price === 0 ? s.gray:''}> {title}</p>
            <p>{price ||'Free'}</p>
            <button onClick ={()=>deleteProduct(id)}>delete</button>
            <button onClick={()=>changePrice(id, 100)}>+100</button>
            {price!==0?<button onClick={()=>changePrice(id,-100)}>-100</button>:''}
            
        </div>
    </div>
  )
}
