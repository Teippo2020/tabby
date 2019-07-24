import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";

/**
 * @class ButtonIcon - It is a button that works as an icon, without text
 */
class ButtonIcon extends React.PureComponent {
  /**
   * @property {string} icon -The name of the icon
   * @property {string} color - The color of the icon
   * @property {string} size- The size of the icon
   * @property {func} onClick - The function triggered by the button
   * @property {string} className - Just in case you need another class
   * @property {string} type - Button type
   * @property {bool} disabled - Button could be disabled
   */
  static propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool
  };

  render() {
    const { icon, color, size, onClick, className, type, disabled } = this.props;
    return (
      <button
        type={type}
        className={classNames("btn", "btn--icon", className)}
        onClick={onClick}
        disabled={disabled}
      >
        <Icon icon={icon} color={color} size={size} />
      </button>
    );
  }
}
ButtonIcon.defaultProps = {
  className: "",
  size: "XXL",
  color: "gray-l1",
  type: "button",
  disabled: false
};

export default ButtonIcon;
