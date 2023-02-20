import { useState } from "react";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClick, setAllClick] = useState(['L','R']);
const leftHandler=()=>{setLeft(left+1)
setAllClick(allClick.concat('L'))}
const rightHandler=()=>{setRight(right+1)
setAllClick((allClick.concat('R')))}

  return (
    <div>
      {left}
      <button onClick={leftHandler}>left</button>
      <button onClick={rightHandler}>right</button>
      {right}
      <p>Hystory of clicks:{allClick.join(' ')}</p>
    </div>
  );
}
export default App;
