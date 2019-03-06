import React from "react";
import { storiesOf } from "@storybook/react";
import ModalContainer from "../../../components/modal/ModalContainer";
import ModalHeader from "../../../components/modal/ModalHeader";
import Modal from "../../../components/modal/Modal"

storiesOf("ModalExamples", module)
  // Modal
  .add("Example", () => 
  <Modal show={true}>
    <ModalHeader title="aaahhh"/>
  </Modal>
)
