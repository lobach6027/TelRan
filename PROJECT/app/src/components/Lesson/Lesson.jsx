import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Lesson({id, subject,numberOfLessons,description}) {
  return (
    <div className={s.lessonsCard}>
        <h4><Link to={`/lesson/${id}`}>{subject}</Link></h4>
        <p>{numberOfLessons}</p>
        <p>{description}</p>
        <button><FontAwesomeIcon className={s.icon} icon={faXmark}/></button>
    </div>
  )
}
