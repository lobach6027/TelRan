import React from 'react'


export default function ToDo(props) {
    console.log(props)
   const style = {
    padding:'10px',
    margin: '10px',
    border: '2px solid black',
    background: '#ffeaa7'
   }
  return (
    <div style={style}>
        <p>Eat</p>
        <p>Task completed</p>
    </div>
  ) 
}
