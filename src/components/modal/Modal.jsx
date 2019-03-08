// Modal
import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import ModalBackground from "./ModalBackground";
import ModalCard from "./ModalCard";

/**
 * @class Modal - It contains the modal card and the modal background
 */
class Modal extends PureComponent {
  /**
   * @property {bool} show - Determines if the modal is visible
   * @property {func} onClose - The function to close the modal
   * @property {node} children - The content of the modal
   * @property {string} className - Just in case you need another class
   */
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const { show, onClose, children, className } = this.props;
    return (
      <div className={classNames({ "hidden": !show }, "modal--wrapper")}>
        <ModalBackground close={onClose} />
        <ModalCard close={onClose} className={className}>
          {children}
        </ModalCard>
      </div>
    );
  }
}
Modal.defaultProps = {
  className: ""
};
export default Modal;
