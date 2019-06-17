import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";

/**
 * @class Select -
 */
class SelectListItem extends React.PureComponent {
  /**
   * @property {bool} icon -
   * @property {bool} title -
   * @property {string} className -
   * @property {bool} selected -
   * @property {string} onClick -
   * @property {number} id -
   * @property {node} value -
   */

  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    selectedValue: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string,
    value: PropTypes.string.isRequired
  };

  render() {
    const { className, selectedValue, title, icon, onClick, id, value } = this.props;

    return (
      <li
        className={classNames(className, { "selected__item": selectedValue === value })}
        onClick={onClick}
        id={id}
        data-value={value}
      >
        {icon && <Icon icon={icon} color="gray-l2" size="R" />}
        {title}
      </li>
    );
  }
}

SelectListItem.defaultProps = {
  icon: false,
  className: "",
  selected: false,
  id: ""
};

export default SelectListItem;
