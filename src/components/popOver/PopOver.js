// PopOver
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import PopOverCard from "./PopOverCard";
import ButtonText from "../buttons/ButtonText";
import {
  getPositionRef,
  getPosition,
  getHeight
} from "./../../utils/popsPosition";

// import {
//   positionLeft,
//   positionRight,
//   positionBottom
// } from "../../utils/popsPosition";

/**
 * @class PopOver - It contains the pop over card and its activator
 */
class PopOver extends React.PureComponent {
  constructor(props) {
    super(props);
    (this.activatorRef = React.createRef()), (this.popRef = React.createRef());
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
    onOpen: PropTypes.func.isRequired,
    position: PropTypes.string,
    className: PropTypes.string
  };

  setReference = ref => {
    this.reference = ref;
  };

  // getPositionRef() {
  //   const node = this.activatorRef.current;
  //   console.log(node, "PAPA");
  //   if (!node) {
  //     return {};
  //   }
  //   console.log(node.firstChild.getBoundingClientRect(), "hijoooo");
  //   const { width, height } = node.firstChild.getBoundingClientRect();
  //   const { left, top, right, bottom } = node.getBoundingClientRect();
  //   return {
  //     top,
  //     left,
  //     right,
  //     bottom,
  //     width,
  //     height
  //   };
  // }

  // getHeight() {
  //   const pop = this.popRef.current;
  //   if (!pop) {
  //     return {};
  //   }
  //   const { width, height } = pop.getBoundingClientRect();
  //   const widthPop = width;
  //   const heightPop = height;
  //   console.log(widthPop, heightPop, "pooooop");
  //   return {
  //     widthPop,
  //     heightPop
  //   };
  // }

  // getPosition() {
  //   let position = this.props.position
  //   const { left, right, top, bottom, width, height } = this.getPositionRef();
  //   const { widthPop, heightPop } = this.getHeight();
  //   const heightMargin = heightPop + 16;
  //   const widthMargin = widthPop + 16
  //   console.log(position);
  //   console.log(this.getPositionRef());
  //   console.log(left, heightMargin, top, widthMargin, right, bottom)

  //   if ( position === "left" && left < widthMargin) {
  //     position= "right"
  //   } else if ( position === "top" && top < heightMargin){
  //       position="bottom"
  //   } else if ( position === "right" && right < -widthMargin){
  //     position = "left"
  //   } else if ( position === "bottom" && bottom < height){
  //     position = "top"
  //   }
  //   console.log(position);
  //   if (position === "left") {
  //     const leftP = left - widthPop - 16;
  //     return {
  //       left: `${leftP}px`,
  //       top: `${top}px`
  //     };
  //   } else if (position === "right") {
  //     const rightP = left + width + 16;
  //     return {
  //       left: `${rightP}px`,
  //       top: `${top}px`
  //     };
  //   } else if (position === "top") {
  //     const topP = top - height - 16;
  //     return {
  //       top: `${topP}px`,
  //       left: `${top}px`
  //     };
  //   } else {
  //     const bottomP = left + height + 16;
  //     return {
  //       top: `${bottomP}px`,
  //       left: `${left}px`
  //     };
  //   }
  // }

  getStyle() {
    const node = this.activatorRef.current;
    const pop = this.popRef.current;
    let position = this.props.position;
    getPositionRef(node);
    getHeight(pop);
    getPosition(position);
  }

  render() {
    const {
      onClose,
      children,
      className,
      activator,
      position,
      show
    } = this.props;
    const { left, right, top, bottom } = this.getStyle();
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
          right={right}
          top={top}
          bottom={bottom}
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
