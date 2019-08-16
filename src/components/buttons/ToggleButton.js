import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Icon} from "../../components/icons/Icon";
import classNames from "classnames";


class ToggleButton extends PureComponent {
  static propTypes = {
    icon:PropTypes.string,
    color:PropTypes.string,
    on:PropTypes.string,
    off: PropTypes.string
  };
  static defaultProps = {
    color: "blue"
  };

  state = {};

  render() {
    const {icon, color, on, off} = this.props;

    return (
        <div className="toggleButton--container">
          <p>{on}</p>
          <div className={classNames("toggle--outside", `bg--${color}`)}>
            <button className={"toggle--inside"}>
              <Icon
                icon={icon}
                color="white"
              />
            </button>
          </div>
          <p>{off}</p>
        </div>
    );
  }
}


export default ToggleButton
