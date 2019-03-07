import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ButtonIcon from "../buttons/ButtonIcon";

class ModalCard extends PureComponent {
  static propTypes = {
    // Here goes the close function
    close: PropTypes.func.isRequired,
    // Here goes modal content
    children: PropTypes.node.isRequired,
    // Just in case you need to add another class
    className: PropTypes.string
  };

  render() {
    const { close, children, className } = this.props;
    return (
      <div className={className}>
        <div className="icons">
          <ButtonIcon iconName="clear" onClick={close} />
        </div>
        <div className="modal--content">{children}</div>
      </div>
    );
  }
}

ModalCard.defaultProps = {
  className: "modal"
};
export default ModalCard;
