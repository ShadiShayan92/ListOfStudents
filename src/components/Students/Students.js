import React from "react";
import Student from "./Student/Student";
import "./Student/Students.css";
const Students = (props) => {
  if (props.toggle) {
    return (
      <div className="student-section">
        {props.studentsList.map((std, index) => (
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
            deleted={props.deleted}
          />
        ))}
      </div>
    );
  }
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
      deleted={props.deleted}
    />
  ));
};

export default Students;
