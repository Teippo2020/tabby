import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ModalBackground extends PureComponent {
  /**
   * @property {func} onClose -The function to close the modal
   */
  static propTypes = {
    onClose: PropTypes.func.isRequired
  };

  /**
   * @function componentDidMount add the keylistener
   */
  componentDidMount() {
    document.addEventListener("keydown", this.handleEscPressed);
  }

  /**
   * @function componentWillUnmount unmount the keylistener
   */

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscPressed);
  }

  /**
   * @function handleEscPressed to close the modal with the esc key
   */
  handleEscPressed = event => {
    const { onClose } = this.props;
    // keyCode 27 = ESC key
    if (event.keyCode === 27) {
      onClose();
    }
  };

  render() {
    const { onClose } = this.props;
    return (
      <div
        className="modal--background"
        onClick={onClose}
        role="presentation"
      />
    );
  }
}

export default ModalBackground;
