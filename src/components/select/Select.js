import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * @class Select -
 */
class Select extends React.PureComponent {
  /**
   * @property {bool} autofocus -
   * @property {bool} disabled -
   * @property {string} form -
   * @property {bool} multiple -
   * @property {string} name -
   * @property {number} size
   */
  static propTypes = {
    disabled: PropTypes.bool,
    form: PropTypes.string.isRequired,
    multiple: PropTypes.bool,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  };

  render() {
    const { disabled, form, multiple, name, size, children } = this.props;

    return (
      <select
        disabled={disabled}
        form={form}
        multiple={multiple}
        name={name}
        size={size}
      >
        {children}
      </select>
    );
  }
}

Select.defaultProps = {
  disabled: false,
  multiple: false
};
