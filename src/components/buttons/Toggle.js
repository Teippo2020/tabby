import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import classNames from "classnames"


class Toggle extends PureComponent {
  static propTypes = {
    icon:PropTypes.string,
    color: PropTypes.string,
    on: PropTypes.string,
    off:PropTypes.string
  };
  static defaultProps = {
    color: "blue"
  };

  state = {};

  render() {
    const {icon, color, on, off} = this.props

    return (
        <div className="toggle--container">
          <p>{off}</p>
          <input type="checkbox" className={classNames("toggle", `bg--${color}`)} />
          <p>{on}</p>
        </div>
    );
  }
}


export default Toggle
