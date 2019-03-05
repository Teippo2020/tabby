import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "material-design-icons/iconfont/material-icons.css";
import styled from 'styled-components';

class ButtonText extends PureComponent {

  render() {
    return (
      <button
        className={`btn btn--text btn--${this.props.color}`}
        Click={this.props.onClick}
      >
        <p>{this.props.text}</p>
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
