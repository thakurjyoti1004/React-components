import { useEffect, useState } from "react";
import "../modal/modal.css";
import ModalHeader from "../modal/Modal_Header";
import ModalBody from "./Modal_Body";
import ModalAction from "./Modal_Action";

const Modal = ({ showModal, primaryBtnConfig, secondaryBtnConfig }) => {


  return (
    <>
      {showModal && (
        <div className="modal-div">
          <ModalHeader />
          <ModalBody />
          <ModalAction
            primaryBtnConfig={primaryBtnConfig}
            secondaryBtnConfig={secondaryBtnConfig}
          />
        </div>
      )}
    </>
  );
};

export default Modal;
