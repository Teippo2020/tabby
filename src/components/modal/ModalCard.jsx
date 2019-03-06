import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ButtonIcon from "../buttons/ButtonIcon";


class ModalCard extends PureComponent {
  static propTypes = {
    close: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const { close, children, className } = this.props;
    return (
      <div className={className}>
        <div className="icons">
          <ButtonIcon iconName="clear" onClick={close} />
        </div>
        <div className="modal--content">
          {children}
        </div>
      </div>
    );
  }
}

ModalCard.defaultProps = {
  className: "modal"
}
export default ModalCard;
