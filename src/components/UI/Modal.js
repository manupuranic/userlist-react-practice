import React from "react";
import Button from "./Button";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) => {
  const onCloseModal = () => {
    props.closeModal("");
  };

  const Backdrop = () => {
    return <div onClick={onCloseModal} className="modal-backdrop"></div>;
  };

  const ModalBody = (props) => {
    return (
      <div className="modal-body">
        <div className="modal-body__heading">
          <h3>Invalid Input</h3>
        </div>
        <div className="modal-body__message">
          <section>{props.message}</section>
        </div>
        <div className="modal-body__actions">
          <Button onClick={props.onCloseModal}>Close</Button>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalBody message={props.message} onCloseModal={props.onCloseModal} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
