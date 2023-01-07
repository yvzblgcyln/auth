import React from "react";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/login", input);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" onChange={handleChange} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <button>Submit</button>
        <a href="/register">register</a>
      </form>
    </div>
  );
}

export default Login;
