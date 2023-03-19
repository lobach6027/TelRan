import React, { useState } from "react";
import userServese from "../../servises/users";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { email, password };
    userServese
      .register(newUser)
      .then((res) => {
        console.log(res)
        toast.success('done!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setEmail("")
        setPassword('')
      })
      .catch((err) =>{
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });
  };
  return (
    <>
    <form onSubmit={handleRegister}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="8"
         
          required
        />
      </div>
      <input type="submit" value= "register" />
    </form>
    <ToastContainer/>
    </>
  );
}
