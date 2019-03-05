import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ModalFooter extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;
    return <div className="modal--footer">{children}</div>;
  }
}