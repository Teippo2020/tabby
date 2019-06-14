import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { popXPosition, popYPosition } from "../../utils/popsPosition";
import Dropdown from "./Dropdown";

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
    activator: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    show: PropTypes.bool.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    title: "",
    back: false,
    className: ""
  };

  constructor(props) {
    super(props);
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

  getStyle() {
    const activator = this.activatorRef.current;
    if (!activator) {
      return {};
    }
    const pop = this.popRef.current;
    const leftPosition = popXPosition(activator, pop);
    const topPosition = popYPosition(activator, pop);
    return {
      left: `${leftPosition}px`,
      top: `${topPosition}px`
    };
  }

  resize = () => this.forceUpdate();

  handleEscPressed = event => {
    const { onClose } = this.props;
    // keyCode 27 = ESC key
    if (event.keyCode === 27) {
      onClose();
    }
  };

  handleClickOutside = event => {
    if (
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target) &&
      this.props.show
    ) {
      this.props.onClose();
    }
  };

  render() {
    const {
      activator,
      children,
      className,
      onClose,
      left,
      show,
      top
    } = this.props;

    return (
      <div className="dropdown__wrapper" ref={this.dropdownRef}>
        <div ref={this.activatorRef} id="activator-dropdown">
          {activator}
        </div>
        <Dropdown
          onClose={onClose}
          className={className}
          left={left}
          show={show}
          top={top}
        >
          {children}
        </Dropdown>
      </div>
    );
  }
}

DropdownWrapper.defaultProps = {
  className: ""
};

export default DropdownWrapper;
