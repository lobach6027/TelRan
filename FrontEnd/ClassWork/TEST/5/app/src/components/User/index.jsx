import React from "react";
import s from './style.module.css'
export default function User({ ip, username, image, university, phone, age, deleteUser,addToVip}) {
  return (
    <div className={s.card}>
      <img src={image} alt={username} />
      <div className={s.info}>
      <h3>{username}</h3>
      <p>{university}</p>
      <p>{phone}</p>
      <p>Age: {age}</p>
      <button onClick = {()=>deleteUser(ip)}>delete</button>
      <button onClick = {()=>addToVip(ip)}>add to VIP</button>
      </div>
    </div>
  );
}
