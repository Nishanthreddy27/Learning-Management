import React, { createContext, useState } from "react";
import { coursesData } from "../data/courses";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(coursesData);
  const [enrolled, setEnrolled] = useState([]);

  const enrollCourse = (course) => {
    setEnrolled([...enrolled, course]);
  };

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  return (
    <CourseContext.Provider
      value={{ courses, enrolled, enrollCourse, addCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};
