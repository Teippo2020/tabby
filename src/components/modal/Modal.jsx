// Modal
import React, { PureComponent } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import ModalBackground from "./ModalBackground";
import ModalCard from "./ModalCard";

class Modal extends PureComponent {
  static propTypes = {
    // To make the modal visible
    show: PropTypes.bool.isRequired,
    // Here goes the close function
    close: PropTypes.func.isRequired,
    // Here goes the modal content
    children: PropTypes.node.isRequired,
    // Just in case you need to add another class
    className: PropTypes.string
  };

  render() {
    const { show, close, children, className } = this.props;
    return (
      <div className={classnames({ "hidden": !show }, "modal--wrapper")}>
        <ModalBackground close={close} />
        <ModalCard close={close} className={className}>
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
