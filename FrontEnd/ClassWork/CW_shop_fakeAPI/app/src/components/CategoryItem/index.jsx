import React from 'react'
import s from './style.module.css'
export default function CategoryItem({label}) {
  return (
    <div className={s.card}>{label}</div>
  )
}
