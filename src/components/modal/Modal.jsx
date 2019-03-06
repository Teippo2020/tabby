import React, { PureComponent } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import ModalBackground from "./ModalBackground";
import ModalCard from "./ModalCard";

class Modal extends PureComponent {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
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

export default Modal;
