import { useState, Fragment } from "react";
import "./App.css";

import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import Modal from "./components/UI/Modal";
import Card from "./components/UI/Card";

function App() {
  const [users, setUsers] = useState([]);
  const [isValid, setIsvalid] = useState(true);
  const [message, setMessage] = useState("");

  const toggleValid = (msg) => {
    setMessage(msg);
    setIsvalid(!isValid);
  };

  const onAddUser = (user) => {
    user.id = Math.random();
    const updatedUser = [user, ...users];
    console.log(updatedUser);
    setUsers(updatedUser);
  };

  let content;
  if (users.length) {
    content = <UserList users={users} />;
  } else {
    content = <section className="msg">No Users Listed!!</section>;
  }

  return (
    <Fragment>
      {!isValid && <Modal onCloseModal={toggleValid} message={message} />}
      <h1 className="title">User List</h1>
      <Card>
        <UserInput openModal={toggleValid} onAddUser={onAddUser} />
      </Card>
      <Card className="userlist">{content}</Card>
    </Fragment>
  );
}

export default App;
