import React, { useState } from "react";
import lessonServise from "../../servises/lessons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddLessonPage() {
  const [subject, setSubject] = useState("");
  const [numberOflessons, setNumberOflessons] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLesson = {
      subject,
      numberOflessons,
      description,
    };
    lessonServise
      .addLesson(newLesson)
      .then((res) => {
        //window.location.replace("/");
        console.log(res);
        setSubject('')
        setDescription('')
        setNumberOflessons('')

      })
      .catch((err) => {
        //tost error
        console.log(err)
      });
  };
  const notify = () => toast("Done!");
  return (
    <div>
      <h2>Add new lesson</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Subject</label>
        <input
          type="text"
          value={subject}
          placeholder="Title"
          onChange={(e) => setSubject(e.target.value)}
        />
        <label htmlFor="">Discription</label>
        <input
          type="text"
          value={numberOflessons}
          placeholder="Discription"
          onChange={(e) => setNumberOflessons(e.target.value)}
        />
        <label htmlFor="">Number of lessons</label>
        <input
          type="text"
          value={description}
          placeholder="Number of lessons"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" onClick={notify} value="ADD NEW LESSON" />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
