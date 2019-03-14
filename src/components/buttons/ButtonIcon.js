import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
    iconName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  render() {
    const { iconName, onClick, className } = this.props;
    return (
      <button
        type="submit"
        className={classNames("btn", "btn--icon", className)}
        onClick={onClick}
      >
        <i className="material-icons"> {iconName} </i>
      </button>
    );
  }
}
ButtonIcon.defaultProps = {
  className: ""
};

export default ButtonIcon;
