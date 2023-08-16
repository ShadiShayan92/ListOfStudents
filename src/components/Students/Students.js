import React from "react";
import Student from "./Student/Student";
const Students = (props) => {
  return props.studentsList.map((std, index) => (
    <Student
      key={index}
      id={std.id}
      name={std.name}
      classNumber={std.classNumber}
      phoneNumber={std.phoneNumber}
      email={std.email}
    />
  ));
};

export default Students;
