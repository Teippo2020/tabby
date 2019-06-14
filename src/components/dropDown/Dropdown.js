import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * @class DropDown- Is the card for the pop over and it contains a cross icon by default
 */
class Dropdown extends React.PureComponent {
  /**
   * @property {bool} show - Determines if the pop over is visible
   * @property {func} onClose - The function to close the modal
   * @property {node} children - The content of the modal
   * @property {string} className - Just in case you need another class
   * @property {string} title - The title of the pop over
   * @property {bool} back - Determines if the pop over has a back button
   * @property {func} onBack - The function to go back
   * @property {number} left - The value of the left position of the pop over card
   * @property {number} top - The value of the top position of the pop over card
   */
  static propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    left: PropTypes.number,
    top: PropTypes.number
  };

  render() {
    const{
      children,
      className,
      show,
      left,
      top
    } = this.props;
    return (
      <div
        style={{
          left,
          top
        }}
        className={classNames("dropdown", className, {
          "visibility-hidden": !show
        })}
      >
        {children}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  className: "",
  left: 0,
  top: 0
};
export default Dropdown;
