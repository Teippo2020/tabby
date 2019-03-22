// PopOver
import React from "react";
import PropTypes from "prop-types";
import PopOverCard from "./PopOverCard";
import { popXPosition, popYPosition } from "../../utils/popsPosition";


/**
 * @class PopOver - It contains the pop over card and its activator
 */
class PopOver extends React.PureComponent {
  constructor(props) {
    super(props);
    this.activatorRef = React.createRef();
    this.popRef = React.createRef();
  }

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
    position: PropTypes.string,
    className: PropTypes.string
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
}

componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
}

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
    }

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
      position,
      title,
      back,
      show
    } = this.props;
    const { left, top, bottom, right} = this.getStyle();
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
          position={position}
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
PopOver.defaultProps = {
  className: "",
  position: "bottom"
};
export default PopOver;
