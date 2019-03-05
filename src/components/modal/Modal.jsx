import React, { PureComponent } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import ButtonIcon from "../Buttons/ButtonIcon";
import ModalBackground from "./ModalBackground";

class Modal extends PureComponent {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  render() {
    const { show, close, children } = this.props;
    return (
      <div className={classnames({ "hidden": !show }, "modal--wrapper")}>
        <ModalBackground close={close} />
        <div className="modal">
          <div className="icons">
            <ButtonIcon iconName="clear" onClick={close} />
          </div>
          <div className="modal--content">{children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
