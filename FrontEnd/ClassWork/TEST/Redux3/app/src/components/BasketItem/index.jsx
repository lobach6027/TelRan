import React from 'react'
import s from './style.module.css'
import {useDispatch} from 'react-redux'
export default function BasketItem
({id, count}) {
    const dispatch = useDispatch()
  return (
    <div className={s.basketCard}>
        <span>{id} </span>
        <div className={s.countContainer}>
        Count: 
        <button onClick={()=>dispatch({type:"INC",payload: id} )}>+</button>
        <span>  {count}  </span>
        <button onClick={()=>dispatch({type:"DEC",payload: id})}>-</button>
        </div>
    </div>
  )
}
