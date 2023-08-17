import React from "react";
import "./Students.css";
import Button from "../../UI/button/button";

const Student = (props) => {
  return (
    <div className="students">
      <label>Student Number: {props.id}</label>
      <label for="flname">Name and Family: </label>
      <input
        type="text"
        id="flname"
        value={props.name}
        onChange={props.nameChanged}
      ></input>

      <label for="class">Class: </label>
      <input
        type="text"
        value={props.classNumber}
        onChange={props.classNumberChanged}
      ></input>

      <label for="phone-number">Phone number: </label>
      <input
        type="number"
        value={props.phoneNumber}
        onChange={props.phoneNumberChanged}
      ></input>

      <label for="email">Email: </label>
      <input
        type="email"
        value={props.email}
        onChange={props.emailChanged}
      ></input>

      {/* <label style={{ color: "red" }} onClick={props.deleted}>
        Delete
      </label> */}
      <label>
        <Button btnType="danger" clicker={props.deleted}>
          Delete
        </Button>
      </label>
    </div>
  );
};

export default Student;
