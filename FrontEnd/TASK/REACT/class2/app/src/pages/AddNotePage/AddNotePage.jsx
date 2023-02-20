import React, { useState } from "react";
import s from "./style.module.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function AddNotePage() {
  const [text, setText] = useState("");
  const [descr, setDescr] = useState("");
  const [tasks, setTasks] = useState("");

  const addNote = (data) => {
    return axios.post("http://localhost:3001/notes", data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      text,
      descr,
      tasks,
    };
    addNote(newNote)
      .then((res) => {
        console.log(res)
        setText('')
        setDescr('')
        setTasks('')

        toast('Done')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={s.wrapper}>
      <h1>Add post</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.control}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          className={s.control}
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
          type="text"
          placeholder="description"
        />
        <input
          className={s.control}
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          type="text"
          placeholder="tasks amount"
        />
        <input className={s.submit} type="submit" value="create new post" />
      </form>
      <ToastContainer />
    </div>
  );
}
