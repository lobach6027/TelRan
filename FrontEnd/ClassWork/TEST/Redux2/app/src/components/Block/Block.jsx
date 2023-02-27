import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Block() {
  let empl = useSelector((store) => store.empl);
  let dispatch = useDispatch()

  return <div>
 <h3>Employee</h3>
{empl.map((item)=><p key={item.id}>{item.name}</p>)}
<button onClick={()=>dispatch({type:"ADD",payload:prompt()})}>Add</button>
  </div>;
}
