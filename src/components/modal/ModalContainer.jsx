import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ButtonText from "../buttons/ButtonText";
import Modal from "./Modal";

class ModalContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  };

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
    const { show, children } = this.state;

    return (
      <div>
        <ButtonText text="modal" color="red" onClick={this.openModal} />
        <Modal show={show} close={this.closeModal}>
          <div>
            {children}
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalContainer;
