import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "./../icons/Icon";
/**
 * @todo Change for custom icons, used temporarily
 */
import "material-design-icons/iconfont/material-icons.css";

/**
 * @class ButtonIcon - It is a button that works as an icon, without text
 */
class ButtonIcon extends React.PureComponent {
  /**
   * @property {string} iconName -The name of the icon
   * @property {func} onClick - The function triggered by the button
   * @property {string} className - Just in case you need another class
   */
  static propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  render() {
    const { icon, color, size, onClick, className } = this.props;
    return (
      <button
        type="submit"
        className={classNames("btn", "btn--icon", className)}
        onClick={onClick}
      >
        <Icon icon={icon} color={color} size={size}/>
      </button>
    );
  }
}
ButtonIcon.defaultProps = {
  className: ""
};

export default ButtonIcon;
