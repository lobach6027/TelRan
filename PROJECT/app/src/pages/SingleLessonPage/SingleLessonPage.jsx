import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import lessonServise from "../../servises/lessons";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SingleLessonPage() {
  const { id } = useParams();
  const [lesson, setLesson] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [subject, setSubject] = useState("");
  const [numberOflessons, setNumberOflessons] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    lessonServise
      .getSingle(id)
      .then((res) => setLesson(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    lessonServise
      .deleteLesson(id)
      .then(() => {
        window.location.replace("/");
      })
      .catch((err) => {
        //tost err
        console.log(err);
      });
  };
  const handleEdit = () => {
    setEditMode(true);
    setSubject(lesson.subject);
    setDescription(lesson.description);
    setNumberOflessons(lesson.numberOflessons);
   
  };
  const handleSubmit = ()=>{

    const editedLesson = {
      subject,
      description,
      numberOflessons
    }
    lessonServise
    .editLesson(id, editedLesson)
    .then((res) =>{setLesson(res.data)
    setEditMode(false)})
    .catch((err) => console.log(err));
  }
  return (
    <>
      {editMode ? (
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
          <input type="submit" value="EDIT CURRENT LESSON" />
        </form>
      ) : (
        <div>
          <h1>{lesson.subject}</h1>
          <p>{lesson.description}</p>
          <p>{lesson.numberOflessons}</p>
          <div>
            <button onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
