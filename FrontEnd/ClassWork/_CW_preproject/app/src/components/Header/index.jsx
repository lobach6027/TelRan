import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Header() {
  const checkClass = ({isActive})=>isActive ? s.active:''
  return (
    <div className={s.wrapper}>
        <nav className={s.navigation}>
            <NavLink className={checkClass}  to="/">Category</NavLink>
            <NavLink  className={checkClass} to="/allproducts">All Products</NavLink>
            <NavLink  className={checkClass} to="/basket">Basket</NavLink>
        </nav>

    </div>
  )
}
