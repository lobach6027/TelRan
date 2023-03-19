import React from "react";
import { useState } from "react";
import userServise from "../../servises/users";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    const currentUser = {
      email,
      password,
    };
    userServise
      .login(currentUser)
      .then(res=>{
        setName(res.data.user.email)
        console.log(res)
        setEmail('')
        setPassword("")
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
    <h1>{name}</h1>
    <div>
      <form onSubmit={handleLogin}>
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
            //pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).$"
            required
          />
        </div>
        <input type="submit" value="LOGIN" />
      </form>
    </div>
    </>
    
  );
}
