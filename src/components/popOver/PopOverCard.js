import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ButtonIcon from "../buttons/ButtonIcon";
/**
 * @class ModalCard - Is the card for the modals and it contains a clear icon by default
 */
class PopOverCard extends PureComponent {
  /**
   * @property {bool} show - Determines if the pop over is visible
   * @property {func} onClose - The function to close the modal
   * @property {node} children - The content of the modal
   * @property {string} className - Just in case you need another class
   */
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    top: PropTypes.string,
    position: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    const { onClose, children, className, show, position, style } = this.props;
    return (
      <div
        style={this.props.left, this.props.right, this.props.top, this.props.bottom}
        className={classNames("pop-over", className, { hidden: !show })}
        position={position}
      >
        <div className="icons">
          <ButtonIcon iconName="clear" onClick={onClose} />
        </div>
        <div className="pop-over--content">{children}</div>
      </div>
    );
  }
}

PopOverCard.defaultProps = {
  className: "",
  position: "bottom"
};
export default PopOverCard;
