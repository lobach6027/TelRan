import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Note from "../Note/Note";
import s from './style.module.css'

const fetchNotes = () => {
  return axios.get("http://localhost:3001/notes");
};

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes()
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /*  useEffect(() => {
    (async () => {
      const resp = await fetch("http://localhost:3001/notes");
      const data = await resp.json();
      setNotes(data);
    })();
  }, []); */

  return (
    <div className={s.wrapper}>
    <h1>Subject</h1>
      {notes.map(({ id, text, descr }) => (
        <Note key={id} title={text} descr = {descr} />
      ))}
    </div>
  );
}
