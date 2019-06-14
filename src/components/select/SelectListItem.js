import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ButtonIcon from "../buttons/ButtonIcon";
import Icon from "../icons/Icon";

/**
 * @class Select -
 */
class SelectListItem extends React.PureComponent {
  /**
   * @property {bool} autofocus -
   * @property {bool} disabled -
   * @property {string} form -
   * @property {bool} multiple -
   * @property {string} name -
   * @property {number} size -
   * @property {node} children -
   */

  constructor(props){
    super(props)
    this.selectItemRef = React.createRef();
  }
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    selected: PropTypes.bool
  };

  render() {
    const { className, selected, title, icon, onClick, id } = this.props;

    return (
      <li className={classNames(className, {"selected__item":selected})} onClick={onClick} id={id} ref={this.selectItemRef}>
        {icon && <Icon  icon={icon} color="gray-l2" size="R" />}
        {title}
      </li>
    );
  }
}

SelectListItem.defaultProps = {
  icon: false,
  className: "",
  selected: false
};

export default SelectListItem