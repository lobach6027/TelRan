import React from "react";
import { Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Notes from "./components/Notes";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import SingleNotePage from "./pages/SingleNotePage/SingleNotePage";
import AddNotePage from "./pages/AddNotePage/AddNotePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Notes />} path="/" />
        {/*<Route element={<About />} path="/about" />*/}
       <Route element={<About />} path="/about" />
       <Route element = {<Contacts />} path = "/contacts"/>
       <Route element = {<SingleNotePage />} path = "/note/:id"/>
       <Route element = {<AddNotePage />} path = "/addnote"/>
       <Route element = {<RegistrationPage />} path = "/register"/>
      </Routes>
    </div>
  );
}

export default App;
