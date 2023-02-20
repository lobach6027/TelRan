import { useDispatch, useSelector } from "react-redux";
import AddForm from "../AddForm";
import MinusForm from "../MinusForm";

function App() {
 const state =  useSelector(state=>state)
 const dispatch = useDispatch();
 const increment = () =>{
  dispatch({type:"INCREMENT"})
 }
 const decrement = () =>{
  dispatch({type:"DECREMENT"})
 }
 
  return (
    <div>
      <p>{state}</p>
      <AddForm />
      <MinusForm />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
    </div>
  );
}

export default App;
