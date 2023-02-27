import React from 'react'
import { useSelector } from 'react-redux'

export default function TasksList() {
  const words = useSelector(state =>state.words)

  return (
    <div>
        {words.map((item)=><p key={item}>{item}</p>)}
    </div>
  )
}
