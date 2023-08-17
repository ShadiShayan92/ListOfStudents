import "./App.css";
import Students from "./components/Students/Students";
import React, { useState, useEffect } from "react";
import Button from "./components/UI/button/button";

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

  const [arrayHolder, setArrayHolder] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [searchBarValue, setSearchBarvalue] = useState("");
  useEffect(() => {
    setArrayHolder(studentsState);
  }, []);

  const searchFilterFunction = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setStudents(itemData);
    setSearchBarvalue(event.target.value);
  };

  // change handlers

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

  const deleteStudent = (index) => {
    const students = [...studentsState];
    students.splice(index, 1);
    setStudents(students);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchBarValue}
        onChange={searchFilterFunction}
      ></input>
      <Button btnType="success" clicker={toggleHandler}>
        Change display
      </Button>
      <Students
        studentsList={studentsState}
        nameChanged={nameChangeHandler}
        classChanged={classChangeHandler}
        numberChanged={numberChangeHandler}
        emailChanged={emailChangeHandler}
        deleted={deleteStudent}
        toggle={toggle}
      />
    </div>
  );
}

export default App;
