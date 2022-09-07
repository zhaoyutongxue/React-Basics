import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Draggable from "react-draggable";

const GreetingModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Greetings!
      </Button>
      <Draggable>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>This popup is draggable </ModalHeader>
          <ModalBody>Hi, welcome to my project blog.</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Look around
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Draggable>
    </div>
  );
};

export default GreetingModal;
