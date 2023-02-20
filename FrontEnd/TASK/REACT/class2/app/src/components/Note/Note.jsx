import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function Note({id,title,descr}) {
  return (
    <div className={s.note}>
      <h5 className={s.title}>
        <Link to={`/note/${id}`}>{title}</Link>
      </h5>
      <p className={s.descr}>{descr}</p>
    </div>
  );
}
