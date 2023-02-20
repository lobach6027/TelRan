import React from "react";
import { useEffect, useState } from "react";
import User from "../User";
import s from "./style.module.css";

export default function Container() {
  useEffect(() => {
    (async () => {
      const resp = await fetch("https://dummyjson.com/users");
      const data = await resp.json();
      console.log(data.users);
      const array = data.users.map(
        ({ ip, username, image, university, phone, age }) => ({
          ip,
          username,
          image,
          university,
          phone,
          age,
        })
      );
      setUsers(array);
    })();
  }, []);


  const [users, setUsers] = useState([]);

  const deleteUser = (delIp) => {
    setUsers(users.filter((item) => item.ip !== delIp))
  };
const [vip,setVip] = useState([]);
  const addToVip = userIp => {
    const readyToVip = users.find((item)=> item.ip ===userIp)
   setVip([...vip,readyToVip])
  }

  return (
    <div className={s.page}>
      {users.map((item) => (
        <User key={item.ip} {...item} deleteUser = {deleteUser} addToVip={addToVip}/>
      ))}
    </div>
  );
}
