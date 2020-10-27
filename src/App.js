import React from "react";
import "./styles.css";
import StudentList from "./StudentList";
import DetailsStudentList from "./DetailsStudentList";
export default function App() {
  const [studentIndex, setStudentIndex] = React.useState(0);
  const [students, setStudents] = React.useState([
    {
      id: 1,
      name: "Supriya",
      age: 22,
      aboutMe: "I like coding"
    },
    {
      id: 2,
      name: "Alok",
      age: 22,
      aboutMe: "I like coding"
    },
    {
      id: 3,
      name: "Ruby",
      age: 22,
      aboutMe: "I like teaching"
    },
    {
      id: 4,
      name: "Priya",
      age: 22,
      aboutMe: "I like dancing"
    },
    {
      id: 5,
      name: "Monika",
      age: 23,
      aboutMe: "I like singing"
    }
  ]);
  const handleClick = (index) => setStudentIndex(index);
  const handleChange = (event) => {
    const filterValue = event.target.value;
    const filteredStudent = students.filter((student) =>
      student.name.includes(filterValue)
    );
    setStudents(filteredStudent);
  };
  return (
    <div className="App">
      <StudentList
        students={students}
        onClick={handleClick}
        onChange={handleChange}
      />
      <DetailsStudentList students={students[studentIndex]} />
    </div>
  );
}
