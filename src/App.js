import "./App.css";
import Students from "./components/Students/Students";
import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
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
  return (
    <div className="App">
      <Students studentsList={students} />
    </div>
  );
}

export default App;
