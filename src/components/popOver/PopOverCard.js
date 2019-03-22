import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ButtonIcon from "../buttons/ButtonIcon";
import PopOverHeader from "./PopOverHeader";
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
    title: PropTypes.string,
    onBack: PropTypes.func,
    back: PropTypes.bool,
    className: PropTypes.string
  };

  render() {
    const {
      onClose,
      children,
      className,
      show,
      title,
      onBack,
      back
    } = this.props;
    return (
      <div
        style={{
          left: this.props.left,
          right: this.props.right,
          top: this.props.top,
          bottom: this.props.bottom
        }}
        className={classNames("pop-over", className, {
          "visibility-hidden": !show
        })}
      >
        <div className="icons">
          <ButtonIcon
            iconName="keyboard_arrow_left"
            onClick={onBack}
            className={classNames({ "visibility-hidden": !back })}
          />
          <PopOverHeader title={title} />
          <ButtonIcon iconName="clear" onClick={onClose} />
        </div>
        <div className="pop-over--content">{children}</div>
      </div>
    );
  }
}

PopOverCard.defaultProps = {
  className: "",
  title: "",
  back: false,
  onBack: null
};
export default PopOverCard;
