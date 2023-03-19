import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem";
import s from "./style.module.css";

export default function CategoryPage() {
  const state = useSelector((state) => state.categories);
  return (
    <div className={s.wrapper}>
      <h1>The best shop for the best things</h1>
      <div className={s.menu}>
        {state.map((item) => (
          <CategoryItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
}
