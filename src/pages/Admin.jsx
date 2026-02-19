import React, { useState, useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export default function Admin() {
  const [data, setData] = useState({});
  const { addCourse } = useContext(CourseContext);

  const handleAdd = () => {
    addCourse({ ...data, id: Date.now() });
    alert("Course Added");
  };

  return (
    <div className="form">
      <h2>Add Course</h2>
      <input placeholder="Title"
        onChange={e => setData({...data, title:e.target.value})}/>
      <input placeholder="Instructor"
        onChange={e => setData({...data, instructor:e.target.value})}/>
      <input placeholder="Video URL"
        onChange={e => setData({...data, video:e.target.value})}/>
      <input placeholder="Description"
        onChange={e => setData({...data, description:e.target.value})}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
