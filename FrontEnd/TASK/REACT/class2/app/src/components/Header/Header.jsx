import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/addnote">Add new post</Link>
            <Link to ="/register">new user registration</Link>
        </nav>
    </div>
  )
}