import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course, enroll }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />

      <div className="course-content">
        <h3>{course.title}</h3>
        <p className="instructor">{course.instructor}</p>
        <p>{course.description}</p>

        <div className="card-buttons">
          <button onClick={() => enroll(course)}>Enroll</button>

          <Link to={`/lesson/${course.id}`}>
            <button className="btn-secondary">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
