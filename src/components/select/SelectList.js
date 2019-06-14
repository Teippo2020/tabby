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
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.array.isRequired
  };

  render() {
    const { className, options, onClick } = this.props;

    return ( 
      <ul className={classNames(className, "select__list")}>
        {options.map((item) => (
          <SelectListItem 
            icon={item.icon} 
            key={item.index} 
            title={item.title} 
            selected={item.selected} 
            onClick={onClick} 
            id={item.id}
            value={item.value}
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