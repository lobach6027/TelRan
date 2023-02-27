import React from "react";
import s from "./style.module.css";

export default function Modal({children, closeWindow}) {
  return (
    <div className={s.container}>
      <div className={s.window}>
{children} 
<button onClick = {closeWindow}>close</button>
      </div>

    </div>
  );
}
