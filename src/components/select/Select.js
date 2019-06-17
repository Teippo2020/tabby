/* eslint-disable react/sort-comp */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SelectHeader from "./SelectHeader";
import SelectList from "./SelectList";

/**
 * @class Select -
 */
class Select extends React.PureComponent {
  /**
   * @property {array} options - List of options
   * @property {string} placeholder - Placeholder for the select
   * @property {string} icon - Name of the icon if the placeholder needs one
   * @property {string} className - ClassName if you need to customize
   */
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
    const { placeholder, icon } = this.props;
    this.state = {
      title: placeholder,
      listOpen: false,
      icon,
      selectedValue: ""
    };
  }

  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.string,
    className: PropTypes.string
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    window.addEventListener("resize", this.resize);
    document.addEventListener("keydown", this.handleEscPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("resize", this.resize);
    document.removeEventListener("keydown", this.handleEscPressed);
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  };

  handleClickOutside = event => {
    const { listOpen } = this.state;
    if (
      this.selectRef.current &&
      !this.selectRef.current.contains(event.target) &&
      listOpen
    ) {
      this.setState({
        listOpen: false
      });
    }
  };

  getSelectedItem = value => {
    const { options } = this.props;
    const item = options.find(_item => _item.value === value);
    return item;
  };

  selectItem = event => {
    const itemValue = event.target.dataset.value;
    const item = this.getSelectedItem(itemValue);
    if (item.icon) {
      this.setState({
        icon: item.icon,
        title: item.title,
        selectedValue: itemValue
      });
    } else {
      this.setState({
        title: item.title,
        selectedValue: itemValue
      });
    }
    this.toggleList();
  };

  render() {
    const { className, options } = this.props;
    const { title, listOpen, icon, selectedValue } = this.state;
    const selectedItem = this.getSelectedItem(selectedValue);

    return (
      <div
        className={classNames("select__wrapper", className)}
        ref={this.selectRef}
      >
        <SelectHeader
          title={selectedItem ? selectedItem.title : title}
          icon={selectedItem ? selectedItem.icon : icon}
          onClick={this.toggleList}
          listOpen={listOpen}
        />
        {listOpen && (
          <SelectList
            options={options}
            onClick={this.selectItem}
            selectedValue={selectedValue}
          />
        )}
      </div>
    );
  }
}

Select.defaultProps = {
  className: "",
  icon: ""
};

export default Select;
