import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";

export default function Lesson() {
  const { id } = useParams();
  const { courses } = useContext(CourseContext);

  const course = courses.find(c => c.id === Number(id));

  if (!course) return <h2>Course Not Found</h2>;

  return (
    <div className="container">
      <h2>{course.title}</h2>
      <iframe
        width="600"
        height="400"
        src={course.video}
        title="lesson"
      ></iframe>
    </div>
  );
}
