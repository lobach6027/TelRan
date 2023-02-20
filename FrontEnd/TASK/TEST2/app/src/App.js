import { useState } from "react";


function App() {
const [notes,setNotes] = useState([
  {id:1, text:'React Router Dom'},
  {id:2, text:'React Router Dom'},
  {id:3, text:'React Router Dom'},
  {id:4, text:'React Router Dom'},
])

  return (
    <div>
      <h1>Subject of lesson:</h1>
      <ul>
        {notes.map(({text,id})=><li key={id}>{text}</li>)}
      </ul>
    </div>
  );
}

export default App;
