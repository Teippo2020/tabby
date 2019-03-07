import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Medal extends PureComponent {
  /**
   * @property {string} medalSrc - Medal URL
   */
  static propTypes = {
    medalSrc: PropTypes.string.isRequired
  };

  render() {
    const { medalSrc } = this.props;
    return <img alt="Medal" src={medalSrc} />;
  }
}

export default Medal;
