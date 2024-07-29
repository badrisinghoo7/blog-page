import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = () => {
    console.log("login");
    let user = {
      email,
      pass,
    };
    console.log(user);
    axios
      .post(`https://blogpage-backenddata.onrender.com/users/login`, user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        alert("Login Successful");
      });
    navigate("/notes").catch((error) => console.log(error));
  };
  return (
    <div>
      <h3>User Login</h3>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
