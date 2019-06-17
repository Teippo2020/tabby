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
   * @property {string} className - ClassName if you need to customize
   * @property {func} onClick - OnClick function for each option
   * @property {array} options - List of options
   */
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.array.isRequired
  };

  render() {
    const { className, options, onClick, selectedValue} = this.props;

    return ( 
      <ul className={classNames(className, "select__list")}>
        {options.map((item, index) => (
          <SelectListItem 
            icon={item.icon} 
            key={index} 
            title={item.title} 
            selected={item.selected} 
            onClick={onClick} 
            id={item.id}
            value={item.value}
            selectedValue={selectedValue}
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