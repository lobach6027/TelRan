import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./style.module.css";
import { faArrowRight, faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <div>
      <header className={s.wrapper}>
        <div className={s.infoBlock}>
          <div className={s.infoContent}>
            <span>
              view popular courses
              <span className={s.icon}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </span>
            <div className={s.contactsInfo}>
              <a href="mailto:example@gmail.com">
                <span className={s.icon}>
                  <FontAwesomeIcon icon={faAt} />
                </span>
                example@gmail.com
              </a>
              <a href="tel:+123456789">
                <span className={s.icon}>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                +12345678910
              </a>
            </div>
          </div>
        </div>
        <div className={s.courseListMenu}>
          <div className={s.logo}>
            <img src="logo.png" alt="logo" />
          </div>
          <nav>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/html">HTML</NavLink>
            <NavLink to="/css">CSS</NavLink>
            <NavLink to="/js">Java Script</NavLink>
            <NavLink to="/react">React/Redux</NavLink>
            <NavLink to="/git">Git</NavLink>
          </nav>
          <div className={s.user}>
            <Link to="/registration">Register</Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </header>
      <main>






        
        <Link to="/add">add new lesson</Link>
      </main>
    </div>
  );
}
