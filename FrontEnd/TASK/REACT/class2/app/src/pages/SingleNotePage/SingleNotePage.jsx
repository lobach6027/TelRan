import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleNotePage() {
  const [note, setNote] = useState({});

  const fetchNote = (id) => {
    return axios.get(`http://localhost:3001/notes/${id}`);
  };

  useEffect(() => {
    fetchNote(id)
      .then((res) => setNote(res.data))
      .catch((err) => console.log(err));
  }, []);
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <h1>{note.text}</h1>
      <p>Description: {note.descr}</p>
      <p>Amount of tasks: {note.tasks}</p>
    </div>
  );
}
