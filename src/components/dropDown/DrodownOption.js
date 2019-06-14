import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";

/**
 * @class DropDown- Is the card for the pop over and it contains a cross icon by default
 */
class DropdownOption extends React.PureComponent {
  /**
   * @property {string} className - Just in case you need another class
   * @property {string} title - The title of the pop over
   * @property {bool} left - The value of the left position of the pop over card
   * @property {number} top - The value of the top position of the pop over card
   */
  static propTypes = {
    className: PropTypes.string,
    right: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    iconDirection: PropTypes.string
  };

  render() {
    const {
      className,
      iconDirection,
      icon,
      text,
      onClick
    } = this.props;
    return (
      <div className={classNames("dropdown__option", className,{
          "dropdown__icon-right": iconDirection === "right"
        })}
        onClick={onClick}
      >
        {icon && <Icon icon={icon} size={"S"}/>}
        <p>{text}</p>
      </div>
    );
  }
}

DropdownOption.defaultProps = {
  className: "",
  right: false,
  iconDirection: "left"
};
export default DropdownOption;
