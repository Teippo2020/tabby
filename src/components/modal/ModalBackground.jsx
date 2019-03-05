import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ModalBackground extends PureComponent {
  static propTypes = {
    close: PropTypes.func.isRequired
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleEscPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscPressed);
  }

  handleEscPressed = event => {
    const { close } = this.props;
    if (event.keyCode === 27) {
      close();
    }
  };

  render() {
    const { close } = this.props;
    return (
      <div className="modal--background" onClick={close} role="presentation" />
    );
  }
}

export default ModalBackground;
