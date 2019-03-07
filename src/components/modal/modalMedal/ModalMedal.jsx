// Modal Medal
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";
import ModalHeader from "../ModalHeader";
import ModalFooter from "../ModalFooter";
import ButtonText from "../../buttons/ButtonText";

class ModalMedal extends PureComponent {
  // Props
  static propTypes = {
    // show = to make the modal visible
    show: PropTypes.bool.isRequired,
    // close = here goes the close function
    close: PropTypes.func.isRequired,
    // children = where you should put the medals, it could be more than one
    children: PropTypes.node.isRequired,
    // title = the title of the modal
    title: PropTypes.string.isRequired,
    // message = the message of the modal
    message: PropTypes.string.isRequired,
    // btnText = the text of the button, the default value is "Ok"
    btnText: PropTypes.string,
    // btnColor = the color of the button, the default color is blue
    btnColor: PropTypes.string
  };

  render() {
    const {
      show,
      close,
      children,
      title,
      btnText,
      btnColor,
      message
    } = this.props;
    return (
      <Modal show={show} className="modal--medal" close={close}>
        <div className="medals">
          {React.Children.map(children, child => child)}
        </div>
        {/* Stars animation */}
        <div className="stars--container">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>
        <ModalHeader title={title} />
        <p>{message}</p>
        <ModalFooter>
          <ButtonText text={btnText} color={btnColor} />
        </ModalFooter>
      </Modal>
    );
  }
}
ModalMedal.defaultProps = {
  btnColor: "blue",
  btnText: "Ok"
};
export default ModalMedal;
