import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import "./UserInput.css";

const UserInput = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const age = useRef();
  const name = useRef();
  const collegName = useRef();

  // const onNameChangeHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };

  // const onAgeChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAge = age.current.value;
    const enteredName = name.current.value;
    const enteredCollegeName = collegName.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      props.openModal("Please enter all the input fields!!");
      return;
    }

    if (enteredAge < 0) {
      props.openModal("Age cannot be negative. Please Enter the correct Age!!");
      return;
    }
    const user = {
      name: enteredName,
      age: enteredAge,
      collegeName: enteredCollegeName,
    };
    props.onAddUser(user);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="user-input">
        <label>Name:</label>
        <input type="text" ref={name} />
        <label>College Name:</label>
        <input type="text" ref={collegName} />
        <label>Age:</label>
        <input type="number" max={100} ref={age} />
      </div>
      <div>
        <Button>Add User</Button>
      </div>
    </form>
  );
};

export default UserInput;
