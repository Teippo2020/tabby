import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";
import lottie from "lottie-web";
/**
 * @class ButtonText - Is a button that only contains text
 */
class ButtonIconText extends React.PureComponent {
  /**
   * @property {string} text -The text of the button
   * @property {func} onClick - The function triggered by the button
   * @property {string} className - Just in case you need another class
   * @property {string} color -  The color of the button
   * @property {string} type - Button type
   * @property {string} icon - Name of the icon
   * @property {string} iconColor - Color of the icon
   * @property {string} iconSize - Size of the icon, by default is 16px
   * @property {bool} iconRight - to define the position of the icon
   * @property {bool} disabled - Button could be disabled
   * @property {string} border - Button could have a border color
   * @property {bool} loading - Button has a loading state, where it shows an animation
   * @see See './../../../styles/variables/_colors.scss' for the list of color names
   */
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    iconSize: PropTypes.string,
    iconRight: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    border: PropTypes.string
  };

  componentDidMount() {
    lottie.loadAnimation({
      container: this.ref, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://pulsarupassets.s3-us-west-2.amazonaws.com/tabby_animations/loading.json", // the path to the animation json
      rendererSettings: {
        scaleMode: 'scale'}
    });
  };

  render() {
    const { color, onClick, text, className, type, iconColor, icon, iconSize, iconRight, disabled, border, loading } = this.props;
    return (
      <button
        className={classNames("btn", "btn__icon--text", `bg--${color}`, { "btn__icon--right": iconRight}, `border--${border}`, className)}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        <Icon icon={icon} color={iconColor} size={iconSize}/>
        {!loading && <p>{text}</p>}
        {loading &&
        <div ref={ref => this.ref = ref} className={classNames("button--animation")} />
        }
      </button>
    );
  }
}
ButtonIconText.defaultProps = {
  className: "",
  type: "button",
  iconSize: "R",
  iconRight: false,
  disabled: false,
  loading: false,
  border: ""
};

export default ButtonIconText;
