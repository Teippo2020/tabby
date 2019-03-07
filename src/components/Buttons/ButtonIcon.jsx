import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class ButtonIcon extends PureComponent {
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
        className={classNames("btn", "btn--icon", { className })}
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
