import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
export default function CategoryItem({ label }) {


  return (
    <Link className={s.card} to={`category/${label}`}>
      <div>{label}</div>
    </Link>
  );
}
