import axios from "axios";
import React, { useState } from "react";

const register = (user) => {
  return axios.post("http://localhost:3001/register", user);
};
export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {email, password};
        register(newUser)
        .then(res => { console.log(res)
            setEmail(''),
            setPassword('')
        })
        .catch(err => {console.log(err.response.data)});
  };
  return (
    <form onSubmit={handleRegister}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter email.."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter password.."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" value="Register" />
    </form>
  );
}
