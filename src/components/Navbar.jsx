import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2 className="logo">EduMaster</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/admin">Admin</Link>

        {user ? (
          <>
            <span className="welcome">Hi, {user.name}</span>
            <button className="btn-outline" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
