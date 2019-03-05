import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ButtonIcon from "../Buttons/ButtonIcon";
import ButtonText from "../Buttons/ButtonText";
import ModalFooter from "./ModalFooter";

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ModalFooter:this.props.footer
    };
  }

  render() {
    return (
      <div className="modal">
        <div className="icons">
          <ButtonIcon iconName="clear" onClick={this.props.close} />
        </div>
        <div className="modal--content">
            {this.props.children}
        </div>
        {this.state.ModalFooter && <ModalFooter/>}
        </div>
    );
  }
}
Modal.propTypes = {
  close: PropTypes.string.isRequired
};

export default Modal;
