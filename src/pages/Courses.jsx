import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const { courses, enrollCourse } = useContext(CourseContext);

  return (
    <div className="courses-page">
      <h1>Explore Courses</h1>

      <div className="courses-grid">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            enroll={enrollCourse}
          />
        ))}
      </div>
    </div>
  );
}
