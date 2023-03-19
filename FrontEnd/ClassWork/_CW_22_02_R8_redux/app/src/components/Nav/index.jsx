import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function Nav() {

    const checkClass = ({isActive})=>isActive ? s.active : ''
  return (
    <div className={s.wrapper}>
      <div className={s.navigation}>
        <NavLink className={checkClass} to="/">Main</NavLink>
        <NavLink className={checkClass} to="/about">About</NavLink>
        <NavLink className={checkClass} to="/products">Products</NavLink>
        <NavLink className={checkClass} to="/basket">Basket</NavLink>
      </div>
    </div>
  );
}
