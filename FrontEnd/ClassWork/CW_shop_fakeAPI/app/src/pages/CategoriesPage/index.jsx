import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import CategoryItem from '../../components/CategoryItem'
export default function CategoriesPage() {
  const categories = useSelector((state) => state.categories);
  return (
    <>
      <h1>The best shop for the best things</h1>
      <div className={s.container}>
        {categories.map(item =><CategoryItem key ={item} label = {item} />)}
      </div>
    </>
  );
}
