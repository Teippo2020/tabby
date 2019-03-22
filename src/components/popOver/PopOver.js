// PopOver
import React from "react";
import PropTypes from "prop-types";
import PopOverCard from "./PopOverCard";
import { popXPosition, popYPosition } from "../../utils/popsPosition";

/**
 * @class PopOver - It contains the pop over card and its activator
 */
class PopOver extends React.PureComponent {
    /**

   * @property {node} children - The content of the pop over
   * @property {string} className - Just in case you need another class
   * @property {func} onClose - The function to close the pop over
   */
  static propTypes = {
    activator: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    show: PropTypes.bool.isRequired,
    title: PropTypes.string,
    back: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    title: "",
    back: false,
    className: ""
  };

  constructor(props) {
    super(props);
    this.activatorRef = React.createRef();
    this.popRef = React.createRef();
  }



  resize = () => this.forceUpdate();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    window.addEventListener("resize", this.resize);
    document.addEventListener("keydown", this.handleEscPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("resize", this.resize);
    document.removeEventListener("keydown", this.handleEscPressed);
  }

  handleEscPressed = event => {
    const { onClose } = this.props;
    // keyCode 27 = ESC key
    if (event.keyCode === 27) {
      onClose();
    }
  };
  
  setReference = ref => {
    this.reference = ref;
  };

  getStyle() {
    const activator = this.activatorRef.current;
    if (!activator) {
      return {};
    }
    const pop = this.popRef.current;
    const leftPosition = popXPosition(activator, pop);
    const topPosition = popYPosition(activator, pop);
    return {
      left: `${leftPosition}px`,
      top: `${topPosition}px`
    };
  }

  handleClickOutside = event => {
    if (
      this.popRef.current &&
      !this.popRef.current.contains(event.target) &&
      this.props.show
    ) {
      this.props.onClose();
    }
  };

  render() {
    const {
      onClose,
      children,
      className,
      activator,
      title,
      back,
      show
    } = this.props;
    const { left, top, bottom, right } = this.getStyle();
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="pop-over--wrapper" ref={this.popRef}>
        <div ref={this.activatorRef} id="activator">
          {activator}
        </div>
        <PopOverCard
          onClose={onClose}
          className={className}
          show={show}
          left={left}
          top={top}
          bottom={bottom}
          right={right}
          title={title}
          back={back}
        >
          {children}
        </PopOverCard>
      </div>
    );
  }
}

export default PopOver;
