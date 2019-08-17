import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";

class ToggleButton extends PureComponent {
  /**
   * @property {string} icon -The text of the button
   * @property {func} onClick - The function triggered by the button
   * @property {string} color -  The color of the button
   * @property {string} on - Button type
   * @property {bool} off - Button could be disabled
   * @property {string} border - Button could have a border color
   * @property {bool} loading - Button has a loading state, where it shows an animation
   * @see See './../../../styles/variables/_colors.scss' for the list of color names
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
    this.setState(prevState => ({
      toggleState: !prevState.toggleState
    }));
    return this.state.toggleState
  };

  onClickToggle = () => {
    let actualState = this.toggle()
    this.props.onClick(actualState);
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
          <button type="button" className="toggle--inside" onClick={this.onClickToggle}>
            <Icon icon={icon} color={color} size="R" />
          </button>
        </div>
        <p>{on}</p>
      </div>
    );
  }
}

export default ToggleButton;
