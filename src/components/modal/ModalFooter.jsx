import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ButtonText from "../Buttons/ButtonText";

class ModalFooter extends PureComponent {

  render() {
    return (
      <div className="modal--footer">
        {this.props.children}
      </div>
    );
  }
}


export default ModalFooter;
