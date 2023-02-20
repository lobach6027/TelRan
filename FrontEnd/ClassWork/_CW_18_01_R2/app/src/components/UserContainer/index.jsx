import React from 'react'
import User from '../User';

export default function UserContainer() {
    users = [{id:1,name:"ann",lastname:"ghjgg"}]
    
      
    
  return (
    <div>
     { users.map(user => <User key={user.id} {...user}/> )}
    </div>
  )
}
