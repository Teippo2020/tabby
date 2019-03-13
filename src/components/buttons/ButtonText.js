import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * @class ButtonText - Is a button that only contains text
 */
class ButtonText extends React.PureComponent {
  /**
   * @property {string} text -The text of the button
   * @property {func} onClick - The function triggered by the button
   * @property {string} className - Just in case you need another class
   * @property {string} color -  The color of the button
   * @see See './../../../styles/variables/_colors.scss' for the list of color names
   */
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  render() {
    const { color, onClick, text, className } = this.props;
    return (
      <button
        className={classNames("btn", "btn--text", `bg--${color}`, className)}
        onClick={onClick}
        type="button"
      >
        <p>{text}</p>
      </button>
    );
  }
}
ButtonText.defaultProps = {
  className: ""
};

export default ButtonText;
