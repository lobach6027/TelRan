import logo from "./logo.svg";
import "./App.css";
import Notes from "./components/Notes/Notes";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Notes />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Courses />} path="/courses" />
        <Route element={<Contacts />} path="/contacts" />
        
      </Routes>
    </div>
  );
}

export default App;
