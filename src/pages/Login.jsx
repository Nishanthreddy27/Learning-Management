import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({});
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const handleSubmit = () => {
    if (login(data.email, data.password)) nav("/");
    else alert("Invalid credentials");
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setData({...data, email:e.target.value})}/>
      <input placeholder="Password" type="password"
        onChange={e => setData({...data, password:e.target.value})}/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
