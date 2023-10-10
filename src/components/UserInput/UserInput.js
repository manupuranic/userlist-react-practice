import React, { useState } from "react";
import Button from "../UI/Button";
import "./UserInput.css";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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
    };
    props.onAddUser(user);
    setEnteredAge("");
    setEnteredName("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="user-input">
        <label>Name:</label>
        <input type="text" value={enteredName} onChange={onNameChangeHandler} />
        <label>Age:</label>
        <input
          type="number"
          max={100}
          onChange={onAgeChangeHandler}
          value={enteredAge}
        />
      </div>
      <div>
        <Button>Add User</Button>
      </div>
    </form>
  );
};

export default UserInput;
