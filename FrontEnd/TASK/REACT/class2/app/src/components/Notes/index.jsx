import React, { useEffect } from "react";
import { useState } from "react";
import Note from "../Note/Note";
import s from "./style.module.css";
import noteServise from "../../servises/notes";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
   noteServise
   .getAll()
      .then(res=> {
        setNotes(res.data);
      })
      .catch((err) => {
        //toast(err)
        console.log(err);
      });
  }, []);


  console.log(notes)
  return (
    <div className={s.wrapper}>
      <h1>Subjects</h1>
      {notes.map((note) => (
        <Note key={note.id} id= {note.id} title = {note.text} descr = {note.descr}/>
      ))}
    </div>
  );
}
