import React from 'react'
import { useDispatch} from "react-redux";

export default function MinusForm() {
    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault();
        const { number } = e.target;
    dispatch({ type: "DEC", payload: + number.value })
        number.value = "";
      };
  return (
    
    <form onSubmit={submit}>
        <input type="number" name='number'/>
        <button>send -</button>
    </form>
  )
}
