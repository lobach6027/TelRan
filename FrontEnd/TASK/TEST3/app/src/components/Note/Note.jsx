import React from "react";
import s from './style.module.css'
export default function Note({title,descr}) {
  return (
    <div className={s.item}>
      <h5 className={s.title}>{title}</h5>
      <p className={s.descr}>{descr}</p>
    </div>
  );
}
