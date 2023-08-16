import "./App.css";
import Students from "./components/Students/Students";
import React, { useState } from "react";

function App() {
  const [studentsState, setStudents] = useState([
    {
      id: 0,
      name: "Shadi",
      classNumber: 210,
      phoneNumber: 123,
      email: "shadi@gmail.com",
    },
    {
      id: 1,
      name: "Farham",
      classNumber: 220,
      phoneNumber: 1234,
      email: "farham@gmail.com",
    },
    {
      id: 2,
      name: "Farid",
      classNumber: 230,
      phoneNumber: 12345,
      email: "farid@gmail.com",
    },
    {
      id: 3,
      name: "Sarah",
      classNumber: 240,
      phoneNumber: 123456,
      email: "sarah@gmail.com",
    },
  ]);

  const nameChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.name = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const classChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.classNumber = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const numberChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.phoneNumber = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  const emailChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex((student) => {
      return student.id === id;
    });
    const student = { ...studentsState[studentIndex] };
    student.email = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  };

  return (
    <div className="App">
      <Students
        studentsList={studentsState}
        nameChanged={nameChangeHandler}
        classChanged={classChangeHandler}
        numberChanged={numberChangeHandler}
        emailChanged={emailChangeHandler}
      />
    </div>
  );
}

export default App;
