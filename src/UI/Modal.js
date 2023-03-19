import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const BackDrop = (props) => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="overlay">
      <div className="contet">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("myPortal"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("myPortal")
      )}
    </Fragment>
  );
};

export default Modal;
