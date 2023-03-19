import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Lessons from "./components/Lessons/Lessons";
import HTML from "./pages/HTMLPage/HTMLPage";
import CSSPage from "./pages/CSSPage/CSSPage"
import JavaScript from "./pages/JavaScriptPage/JavaScriptPage"
import ReactRedux from  "./pages/ReactReduxPage/ReactReduxPage";
import Git from "./pages/GitPage/GitPage"
import SingleLessonPage from "./pages/SingleLessonPage/SingleLessonPage";
import AddLessonPage from './pages/AddLessonPage/AddLessonPage'
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route element ={<Lessons/>}  path = "/"/>
        <Route element ={<CSSPage/>} path = "/css"/>
        <Route element ={<HTML/>} path = "/html"/>
        <Route element ={<JavaScript />} path = "/js"/>
        <Route element ={<ReactRedux/>} path = "/react"/>
        <Route element ={<Git />} path = "/git"/>
        <Route element = {<SingleLessonPage />} path = "/lesson/:id"/>
        <Route element ={<AddLessonPage />} path = "/add"/>
        <Route element = {<RegistrationPage/>} path = "/registration"/>
        <Route element = {<LoginPage/>} path="/login"/>
      </Routes>
    </div>
  );
}

export default App;
