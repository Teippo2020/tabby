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
   * @property {bool} autofocus -
   * @property {bool} disabled -
   * @property {string} form -
   * @property {bool} multiple -
   * @property {string} name -
   * @property {number} size -
   * @property {node} children -
   */
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
    const { placeholder, icon } = this.props;
    this.state = {
      title: placeholder,
      listOpen: false,
      icon,
      selectedValue: "Opción 5"
    };
  }

  static propTypes = {
    options: PropTypes.array.isRequired,
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
  getSelectedItem = (value) => {
    const { options } = this.props;
    const item = options.find(_item => _item.value === value);
    return item
  }
  selectItem = (event) => {
    const itemValue = event.target.dataset.value
    const item =  this.getSelectedItem(itemValue)
    if (item.icon) {
      this.setState({
        icon: item.icon,
        title: item.title
      });
    } else {
      this.setState({
        title: item.title
      });
    }
    this.toggleList();
  };

  render() {

    const { className, options, placeholder } = this.props;
    const { title, listOpen, icon, selectedValue } = this.state;
    let selectedItem = this.getSelectedItem(selectedValue)
    
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
        {listOpen && <SelectList options={options} onClick={this.selectItem}  />}
      </div>
    );
  }
}

Select.defaultProps = {
  className: ""
};

export default Select;
