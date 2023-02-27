import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const changeNote = (id,data) => {
  return axios.patch(`http://localhost:3001/notes/${id}`,data);
};

export default function SingleNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("");
  const [descr, setDescr] = useState("");
  const [tasks, setTasks] = useState("");

  useEffect(() => {
    fetchNote(id)
      .then((res) => setNote(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchNote = (id) => {
    return axios.get(`http://localhost:3001/notes/${id}`);
  };
  const fetchDelete = (id) => {
    return axios.delete(`http://localhost:3001/notes/${id}`);
  };

  useEffect(() => {
    fetchNote(id)
      .then((res) => setNote(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    fetchDelete(id)
      .then(() => {
        window.location.replace("/");
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    setEditMode(true);
    setText(note.text);
    setDescr(note.descr);
    setTasks(note.tasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const editedNote = {
      text,
      descr,
      tasks,
    };
    changeNote(id, editedNote)
    .then(res=>{
      setNote(res.data)
      setEditMode(false)
    })
  };

  return (
    <>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="title"
          />
          <input
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            type="text"
            placeholder="description"
          />
          <input
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
            type="text"
            placeholder="tasks amount"
          />
          <input type="submit" value="update exist post" />
        </form>
      ) : (
        <div>
          <h1>{note.text}</h1>
          <p>Description: {note.descr}</p>
          <p>Amount of tasks: {note.tasks}</p>
          <div>
            <button onClick={handleDelete}>Delete post</button>
            <button onClick={handleEdit}>Update post</button>
          </div>
        </div>
      )}
    </>
  );
}
