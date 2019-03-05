import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "material-design-icons/iconfont/material-icons.css";

class ButtonText extends PureComponent {
  render() {
    const { color, onClick, text } = this.props;
    return (
      <button
        className={`btn btn--text btn--${color}`}
        onClick={onClick}
        type="button"
      >
        <p>{text}</p>
      </button>
    );
  }
}
ButtonText.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default ButtonText;
