import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import lottie from "lottie-web";

/**
 * @class ButtonText - Is a button that only contains text
 */
class ButtonText extends React.PureComponent {
  /**
   * @property {string} text -The text of the button
   * @property {func} onClick - The function triggered by the button
   * @property {string} className - Just in case you need another class
   * @property {string} color -  The color of the button
   * @property {string} type - Button type
   * @property {bool} disabled - Button could be disabled
   * @see See './../../../styles/variables/_colors.scss' for the list of color names
   */
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    border: PropTypes.string,
    loading: PropTypes.bool
  };

  componentDidMount() {
    lottie.loadAnimation({
      container: this.ref, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://pulsarupassets.s3-us-west-2.amazonaws.com/tabby_animations/loading.json", // the path to the animation json
      rendererSettings: {
        scaleMode: 'scale'
      }
    });
  };

  render() {
    const { color, onClick, text, className, type, disabled, border, loading } = this.props;
    return (
      <button
        className={classNames("btn", "btn--text", `bg--${color}`, `border--${border}`,className)}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {!loading && <p>{text}</p>}
        {loading &&
          <div ref={ref => this.ref = ref} className={classNames("button--animation")} />
        }
      </button>
    );
  }
}
ButtonText.defaultProps = {
  className: "",
  type: "button",
  disabled: false,
  border: "",
  loading: false,
};

export default ButtonText;
