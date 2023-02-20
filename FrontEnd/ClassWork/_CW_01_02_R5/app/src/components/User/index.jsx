import React from "react";
import s from './style.module.css'

export default function UserItem({id, first_name, last_name, email,deleteUser }) {
  return (
    <div className={s.card}>
      <div>
      <h3>{first_name} {last_name}</h3>
      <p>{email}</p>
      </div>
      <button className={s.button} onClick = {()=>deleteUser(id)}>delete user</button>
    </div>
  );
}
