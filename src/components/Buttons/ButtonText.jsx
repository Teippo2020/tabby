import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "material-design-icons/iconfont/material-icons.css";

class ButtonText extends PureComponent {
  render() {
    return (
      <div
        className={`btn btn--text btn--${this.props.btnClassName}`}
        Click={this.props.onClick}
      >
        <p>{this.props.text}</p>
      </div>
    );
  }
}
ButtonText.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  btnClassName: PropTypes.string.isRequired
};

export default ButtonText;
