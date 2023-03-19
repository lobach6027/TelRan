import React from "react";
import { NavLink } from "react-router-dom";
import s from './style.module.css'

export default function Header() {
  const links = [
    { id: 1, label: "Categories", to: "/" },
    { id: 2, label: "All products", to: "/products/all" },
    { id: 3, label: "Basket", to: "basket" },
  ];
  const isActive = ({isActive})=>isActive? s.active:''
  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        {links.map((item) => (
          <NavLink className={isActive} to={item.to} key={item.id}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
