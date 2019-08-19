import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";

class ToggleButton extends React.PureComponent {
  /**
   * @property {string} icon -The icon of the button
   * @property {func} onClick - The function triggered by the button
   * @property {string} color -  The color of the background
   * @property {string} on - Text to explain the "on" state
   * @property {bool} off - Text to explain the "off" state
   * @property {bool} toggleState - The state of the button
   * @see See './../../../styles/variables/_colors. scss' for the list of color names
   */
  static propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    on: PropTypes.string,
    off: PropTypes.string,
    toggleState: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    color: "blue",
    on: "",
    off: "",
    icon: "",
    toggleState: true
  };

  state = {
    toggleState: this.props.toggleState
  };

  toggle = () => {
    const { toggleState } = this.state;
    const newState = !toggleState;
    this.setState({
      toggleState: newState
    });
    return newState;
  };

  onClickToggle = () => {
    const { onClick } = this.props;
    const actualState = this.toggle();
    onClick(actualState);
  };

  render() {
    const { icon, color, on, off } = this.props;
    const { toggleState } = this.state;

    return (
      <div className="toggleButton--container">
        <p>{off}</p>
        <div
          className={classNames("toggle--outside", `bg--${color}`, {
            "toggle--off": !toggleState
          })}
        >
          <button
            type="button"
            className="toggle--inside"
            onClick={this.onClickToggle}
          >
            <Icon icon={icon} color={color} size="R" />
          </button>
        </div>
        <p>{on}</p>
      </div>
    );
  }
}

export default ToggleButton;
