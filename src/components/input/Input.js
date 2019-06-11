import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * @class Input - It is a button that works as an icon, without text
 */
class Input extends React.PureComponent {
  /**
   * @property {string} name -The name of the icon
   * @property {string} type - The color of the icon
   * @property {string} placeholder- The size of the icon
   * @property {func} onBlur - The function triggered by the button
   * @property {func} onChange - The function triggered by the button
   * @property {bool} showError - The function triggered by the button
   * @property {string} defaultValue - The function triggered by the button
   * @property {func} innerRef - The function triggered by the button
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    showError: PropTypes.bool.isRequired,
    defaultValue: PropTypes.string,
    innerRef: PropTypes.func
  };

  render() {
    const {
      innerRef,
      name,
      type,
      placeholder,
      showError,
      onChange,
      onBlur,
      defaultValue
    } = this.props;
    return (
      <input
        ref={innerRef}
        autoComplete="off"
        name={name}
        type={type}
        placeholder={placeholder}
        className={classNames({ error_div: showError }, "input")}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={defaultValue}
      />
    );
  }
}
Input.defaultProps = {
  placeholder: "",
  defaultValue: "",
  innerRef: () => {}
};

export default Input;
