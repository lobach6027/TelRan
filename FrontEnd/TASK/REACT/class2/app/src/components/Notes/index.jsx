import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Note from "../Note/Note";
import s from "./style.module.css";

const fetchNotes = () => {
  return axios.get("http://localhost:3001/notes");
};
export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes()
      .then((res) => {
        setNotes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
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
