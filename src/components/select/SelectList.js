import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ButtonIcon from "../buttons/ButtonIcon";
import SelectListItem from "./SelectListItem";

/**
 * @class Select -
 */
class SelectList extends React.PureComponent {
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
    className: PropTypes.string,
    list: PropTypes.array.isRequired
  };

  render() {
    const { className, icon, title, list, onClick, id } = this.props;

    return ( 
      <ul className={classNames(className, "select__list")}>
        {list.map((item) => (
          <SelectListItem 
            icon={item.icon} 
            key={item.id} 
            title={item.title} 
            selected={item.selected} 
            onClick={onClick} 
            id={item.id}
            />
        )) }
      </ul>
    );
  }
}

SelectList.defaultProps = {
  icon: false,
  className: ""
};

export default SelectList