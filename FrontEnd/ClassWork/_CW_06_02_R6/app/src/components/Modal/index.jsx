import React from 'react'
import s from './style.module.css'
import { children } from 'react'

export default function Modal({closeWindow,children}) {
  return (
    <div>
       
    <div className={s.container}>
   
        <div className={s.window}>
            {children}
            <button onClick={closeWindow}>Close basket</button>
        </div>
    </div>
    </div>
    
    
  )
}
