import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  render() {
    const { placeholder, className, type } = this.props;
    return (
      <input
        className={`input ${className} `}
        placeholder={placeholder}
        type={type}
      />
    );
  }
}

export default Input;
