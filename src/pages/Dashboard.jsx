import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export default function Dashboard() {
  const { enrolled } = useContext(CourseContext);

  return (
    <div className="dashboard">
      <div className="hero">
        <h1>Welcome to EduMaster LMS</h1>
        <p>Upgrade your skills with world-class courses</p>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h2>{enrolled.length}</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>Expert Instructors</p>
        </div>

        <div className="stat-card">
          <h2>120+</h2>
          <p>Students</p>
        </div>
      </div>
    </div>
  );
}
