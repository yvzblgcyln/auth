import { useState } from "react";
import axios from "axios";
function Register() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", input);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h1>Register</h1>
        <input type="text" placeholder="username" name="username" onChange={handleChange} />
        <input type="email" placeholder="email" name="email" onChange={handleChange} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <input type="text" placeholder="name" name="name" onChange={handleChange} />
        <button>Submit</button> <a href="/login">login</a>
      </form>
    </div>
  );
}
export default Register;
