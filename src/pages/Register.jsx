import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({});
  const { register } = useContext(AuthContext);
  const nav = useNavigate();

  const handleSubmit = () => {
    register(data);
    nav("/login");
  };

  return (
    <div className="form">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setData({...data, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setData({...data, email:e.target.value})}/>
      <input placeholder="Password" type="password"
        onChange={e => setData({...data, password:e.target.value})}/>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
