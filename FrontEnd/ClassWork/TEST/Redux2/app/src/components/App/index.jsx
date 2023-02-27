import { useDispatch, useSelector } from "react-redux";
import Block from "../Block/Block";


function App() {
  let count  = useSelector(store=>store.count)
  let dispatch = useDispatch()
  return (
    <div>
    {count}
    <div>
      <button onClick={()=>dispatch({type:"INC",payload: +prompt()})}>+</button>
      <button onClick={()=>dispatch({type:"DEC",payload: +prompt()})}>-</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
    <Block />
    </div>
  );
}

export default App;
