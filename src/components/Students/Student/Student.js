import React from "react";
import "./Students.css";

const Student = (props) => {
  return (
    <div className="students">
      <label>Student Number: {props.id}</label>
      <label for="flname">Name and Family: </label>
      <input type="text" id="flname" value={props.name}></input>

      <label for="class">Class: </label>
      <input type="text" value={props.classNumber}></input>

      <label for="phone-number">Phone number: </label>
      <input type="number" value={props.phoneNumber}></input>

      <label for="email">Email: </label>
      <input type="email" value={props.email}></input>
    </div>
  );
};

export default Student;
