import React from "react";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  const users = props.users;
  return (
    <div>
      <ul>
        {users.map((user) => (
          <UserListItem
            key={user.id}
            name={user.name}
            age={user.age}
            collegeName={user.collegeName}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
