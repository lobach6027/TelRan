import React, { useContext } from "react";
import { Context } from "../../context/context";

export default function ProductItem() {
  const {state,setState} = useContext(Context)
function handle (){
  setState(222)
}
  return (
    <div>
      <p>{state}</p>
      <button onClick={handle}>save</button>
    </div>
  );
}
