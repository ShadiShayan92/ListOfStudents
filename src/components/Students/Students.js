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
      nameChanged={(event) => props.nameChanged(event, std.id)}
      classNumberChanged={(event) => props.classChanged(event, std.id)}
      phoneNumberChanged={(event) => props.numberChanged(event, std.id)}
      emailChanged={(event) => props.emailChanged(event, std.id)}
    />
  ));
};

export default Students;
