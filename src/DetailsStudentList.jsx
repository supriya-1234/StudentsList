import React from "react";
import "./styles.css";
export default function DetailsStudentList(students) {
  return (
    <div className="right">
      <div>{students.name}</div>
      <div>{students.age}</div>
      <div>{students.aboutMe}</div>
    </div>
  );
}
