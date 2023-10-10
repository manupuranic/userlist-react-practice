import React from "react";
import Button from "./Button";
import "./Modal.css";

const Modal = (props) => {
  const onCloseModal = () => {
    props.closeModal("");
  };

  return (
    <div onClick={onCloseModal} className="modal-backdrop">
      <div className="modal-body">
        <div className="modal-body__heading">
          <h3>Invalid Input</h3>
        </div>
        <div className="modal-body__message">
          <section>{props.message}</section>
        </div>
        <div className="modal-body__actions">
          <Button onClick={onCloseModal}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
