import { useState } from "react";
import { Context } from "../../context/context";
import Main from "../Main";

function App() {
  const [state, setState] = useState(125)

  return (
    <div>
      <Context.Provider value={{state,setState}}>
        <Main/>
      </Context.Provider>
    </div>
  );
}

export default App;
