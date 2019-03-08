import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * @class Modal Background - Is the layer of color under the modal, you can choose the color 
 */
class ModalBackground extends PureComponent {
  /**
   * @property {func} onClose -The function to close the modal
   *  @property {string} color  - The color of the background just in case you need another color, it's not-gray-d3 by default
   *  @see See './../../../styles/variables/_colors.scss' for the list of color names, preferentially use dark colors
   */
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    color: PropTypes.string
  };

  componentDidMount() {
    // add Key listener when key ESC is pressed
    document.addEventListener("keydown", this.handleEscPressed);
  }

  componentWillUnmount() {
    // remove Key listener when key ESC is pressed
    document.removeEventListener("keydown", this.handleEscPressed);
  }

  /**
   * @function handleEscPressed to close the modal with the ESC key
   */
  handleEscPressed = event => {
    const { onClose } = this.props;
    // keyCode 27 = ESC key
    if (event.keyCode === 27) {
      onClose();
    }
  };

  render() {
    const { onClose, color } = this.props;
    return (
      <div
        className={classNames("modal--background", `bg--${color}`)}
        onClick={onClose}
        role="presentation"
      />
    );
  }
}
ModalBackground.defaultProps ={
  color: "not-gray-d3"
};
export default ModalBackground;
