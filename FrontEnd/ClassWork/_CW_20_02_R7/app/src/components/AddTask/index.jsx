import React from "react";
import { useDispatch } from "react-redux";


export default function AddTask() {
    const dispatch = useDispatch()
    
  const submit = (e) => {
    e.preventDefault();
    const { word } = e.target;
    dispatch({ type: "ADD" , payload: word.value});
    word.value = "";
  };
  
  return (
    <form onSubmit={submit}>
      <input type="text" name="word" placeholder="enter task" />
      <button>add task</button>
    </form>
  );
}
