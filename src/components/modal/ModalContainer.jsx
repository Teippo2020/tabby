import React, { PureComponent } from "react";

import ButtonText from "../Buttons/ButtonText";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";

class ModalContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  openModal = () => {
    this.setState({
      show: true
    });
  };

  closeModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <ButtonText text="modal" color="red" onClick={this.openModal} />
        <Modal show={show} close={this.closeModal} modalFooter={false}>
          <ModalHeader title="Hola prrrrooo" />
        </Modal>
      </div>
    );
  }
}

export default ModalContainer;
