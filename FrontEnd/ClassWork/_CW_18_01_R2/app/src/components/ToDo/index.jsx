import React from 'react'
import s from './style.module.css'

export default function ToDo({id,title, done}) {
    const doneStyle = {
        color: 'gray',
        textDecoration: 'line-through',
      }
    
  return (
    <div className={s.todo} style={done?doneStyle:{}}>
    <p>{title}</p>
    </div>

  )
}
