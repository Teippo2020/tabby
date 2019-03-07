import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ModalHeader extends PureComponent {
  static propTypes = {
    // Here goes the title of the modal
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <div className="modal--header">
        <h2>{title}</h2>
      </div>
    );
  }
}

export default ModalHeader;
