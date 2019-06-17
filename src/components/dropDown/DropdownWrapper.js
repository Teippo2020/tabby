import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Dropdown from "./Dropdown";
import ButtonIcon from "../buttons/ButtonIcon";
/**
 * @class DropDownWrapper -
 */
class DropdownWrapper extends React.PureComponent {
  /**
   * @property {node} children - The content of the pop over
   * @property {string} className - Just in case you need another class
   * @property {func} onClose - The function to close the pop over
   * @property {node} activator - The button/link that triggers the pop over
   * @property {bool} show - Determines if the popOver is visible
   * @property {string} title - The title of the pop over
   * @property {bool} back - Determines if the pop over has a back button
   */

  static propTypes = {
    icon: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.activatorRef = React.createRef();
    this.dropdownRef = React.createRef();
  }

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

  toggleDropDown = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  onClose = () => {
    this.setState({
      show: false
    });
  };

  resize = () => this.forceUpdate();

  handleEscPressed = event => {
    const { onClose } = this.props;
    // keyCode 27 = ESC key
    if (event.keyCode === 27) {
      onClose();
    }
  };

  handleClickOutside = event => {
    const { show } = this.state;
    if (
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target) &&
      show
    ) {
      this.setState({
        show:false
      });
    }
  };

  render() {
    const { children, className, icon } = this.props;

    return (
      <div className="dropdown__wrapper" ref={this.dropdownRef}>
        <div ref={this.activatorRef} id="activator-dropdown">
          <ButtonIcon
            icon={icon}
            onClick={this.toggleDropDown}
          />
        </div>
        {this.state.show && 
          <Dropdown onClose={this.onClose} className={className}>
            {children}
          </Dropdown>

        }
      </div>
    );
  }
}

DropdownWrapper.defaultProps = {
  className: "",
  icon: "options"
};

export default DropdownWrapper;
