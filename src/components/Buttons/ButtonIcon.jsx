import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "material-design-icons/iconfont/material-icons.css";

class ButtonIcon extends PureComponent {
  render() {
    return (
      <div
        className={`btn btn--icon icon--${this.props.iconClassName}`}
        onClick={this.props.onClick}
      >
        <i className="material-icons"> {this.props.iconName}</i>
      </div>
    );
  }
}
ButtonIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  iconClassName: PropTypes.isRequired
};

export default ButtonIcon;
