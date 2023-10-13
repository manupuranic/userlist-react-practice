import React from "react";
import "./UserListItem.css";

const UserListItem = (props) => {
  return (
    <li className="list">
      <section>
        {props.name} ({props.age} years old) {props.collegeName}
      </section>
    </li>
  );
};

export default UserListItem;
