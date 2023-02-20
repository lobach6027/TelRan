import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import UserItem from "../User";

export default function UserContainer() {
    useEffect(() => {
        (async () => {
          const resp = await fetch("https://reqres.in/api/users");
          const info = await resp.json();
          const arr = info.data;
          const newArray = arr.map(({id,first_name,last_name,email})=>({
            id,first_name,last_name, email
          }))
         setUsers(newArray);
        
        })();
      }, []);
    
    
      const deleteUser = (id)=>{
        const newArray  = users.filter((item)=>item.id!==id)
        setUsers(newArray)
      }
    
    const [users,setUsers] = useState([])
    
    const count  = users.length



  return (
   <div>
     <div>{users.map((item)=><UserItem key={item.id} {...item} deleteUser={deleteUser}/>)}</div>
     <p>Total number of users: {count}</p>
   </div>
  )
}
