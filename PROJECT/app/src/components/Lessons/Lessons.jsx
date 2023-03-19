import React, { useEffect } from "react";
import { useState } from "react";
import lessonServise from "../../servises/lessons"
import Lesson from "../Lesson/Lesson";
import s from './style.module.css'

export default function Lesoons() {
  const [lessons, setLessons] = useState([]);

useEffect(()=>{
    lessonServise.getAll()
    .then(res=>setLessons(res.data))
    .catch(err=>{
//toster error
      console.log(err)
    })
},[])

  return (
    <div>
     <div className={s.lessonsContainer}>
     {lessons.map((item) => <Lesson key={item.id} {...item}/>)}
     </div>
       
     
    </div>
  );
}
