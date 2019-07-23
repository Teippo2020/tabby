import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * @class Input - It is an html input
 */
class Input extends React.PureComponent {
  /**
   * @property {string} name -The name of the input
   * @property {string} type - The type of the input
   * @property {string} placeholder- The placeholder of the input
   * @property {func} onBlur - The function triggered when the input is onBlur
   * @property {func} onChange - The function triggered when the input value change
   * @property {bool} showError - Determines if the input should add an error style
   * @property {string} defaultValue - The Default Value of the input
   * @property {func} innerRef - The function to create a Ref for the input
   * @property {string} autoComplete - To enable autocomplete
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    showError: PropTypes.bool,
    defaultValue: PropTypes.string,
    innerRef: PropTypes.func,
    autoComplete: PropTypes.string
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
      defaultValue,
      autoComplete
    } = this.props;
    return (
      <input
        ref={innerRef}
        autoComplete={autoComplete}
        name={name}
        type={type}
        placeholder={placeholder}
        className={classNames({ "input__error": showError }, "input")}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={defaultValue}
      />
    );
  }
}
Input.defaultProps = {
  defaultValue: "",
  placeholder: "",
  autoComplete: "off",
  showError: false,
  innerRef: () => {}
};

export default Input;
