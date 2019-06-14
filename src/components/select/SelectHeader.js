import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ButtonIcon from "../buttons/ButtonIcon";
import Icon from "../icons/Icon"

/**
 * @class Select -
 */
class SelectHeader extends React.PureComponent {
  /**
   * @property {bool} autofocus -
   * @property {bool} disabled -
   * @property {string} form -
   * @property {bool} multiple -
   * @property {string} name -
   * @property {number} size -
   * @property {node} children -
   */
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  render() {
    const { className, icon, title, onClick, listOpen } = this.props;

    return ( 
      <div className={classNames('select__header', className)} onClick={onClick}>
        {icon && <Icon icon={icon} color="not-gray-l2" size="R" />}
        <p>{title}</p>
        <ButtonIcon icon={listOpen ? "top" : "down"} color="not-gray-l1" size="XXS" onClick={()=>{}}/>
      </div>
    );
  }
}

SelectHeader.defaultProps = {
  icon: false,
  className: ""
};

export default SelectHeader