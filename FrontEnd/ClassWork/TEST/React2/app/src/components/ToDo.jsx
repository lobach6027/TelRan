import React from 'react'

export default function ToDo(props) {
    console.log(props)
    const style = {
        padding:'10px',
        margin:'10px',
        border:'1px solid black'
    }
  return (
    <div style={style}>
        <p>Eat</p>
        <p>Done</p>
    </div>
  )
}
