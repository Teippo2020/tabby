// PopOver
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import PopOverCard from "./PopOverCard";
import ButtonText from "../buttons/ButtonText";

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
    this.state = {
      show: true
    };
    this.activatorRef = React.createRef();
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

  openPop = () => {
    this.setState({
      show: true
    });
    console.log("aiudaa");
  };

  closePop = () => {
    this.setState({
      show: false
    });
    console.log("aiudaa");
  };

  getPositionRef() {
    const node = this.activatorRef.current;
    console.log(node.firstChild);
    const { left, top, right, bottom } = node.getBoundingClientRect();
    return {
      top,
      left,
      right,
      bottom
    };
  }

  getPosition() {
    // const activator = this.activatorRef;
    const { position } = this.props;
    // let { top, bottom, left, right } = this.getPositionRef();
    console.log(this.getPositionRef());
    if (position === "left") {
      const leftP = this.getPositionRef().left + 110;
      const topP = this.getPositionRef().top;
      return {
        right: `${leftP}px`,
        top: `${topP}px`
      };
    } else if (position === "right") {
      const rightP = this.getPositionRef().right + 110;
      const topP = this.getPositionRef().top;
      return {
        right: `${rightP}px`,
        top: `${topP}px`
      };
    } else if (position === "top") {
      const leftP = this.getPositionRef().left + 110;
      const topP = this.getPositionRef().top;
      return {
        left: `${left}px`,
        top: `${topP}px`
      };
    } else {
      const bottomP = this.getPositionRef().bottom + 110;
      const leftP = this.getPositionRef().left;
      return {
        bottom: `${bottomP}px`,
        left: `${leftP}px`
      };
    }
  }

  // positionTop() {
  //   let top = this.getPositionRef().top - 16;
  //   let left = this.getPositionRef().left;
  //   console.log(top);
  //   return {
  //     top,
  //     left
  //   };
  // }

  // positionBottom() {
  //   let left = this.getPositionRef().left;
  //   let bottom = this.getPositionRef().bottom;
  //   bottom = bottom + 16;
  //   console.log(bottom);
  //   return {
  //     bottom,
  //     left
  //   };
  // }

  // positionLeft() {
  //   const leftPop = this.getPositionRef().left - 16;
  //   const topPop = this.getPositionRef().top;
  //   return {
  //     left: `${leftPop}px`,
  //     top: `${topPop}px`
  //   };
  // }

  // positionRight() {
  //   const rightPop = this.getPositionRef().right + 16;
  //   const topPop = this.getPositionRef().top;
  //   return {
  //     right: `${rightPop}px`,
  //     top: `${topPop}px`
  //   };
  // }

  getStyle = () => {
    let { right } = this.getPosition(this.props.position);
    console.log(right);
    console.log("aiudaaaa no tengo estilooo");
    return {
      right
    };
  };

  render() {
    const { onClose, children, className, activator, position } = this.props;
    const { show } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="pop-over--wrapper" ref={this.setReference}>
        <div ref={this.activatorRef} id="activator">
          {activator}
        </div>
        <ButtonText color="blue" text="gg" onClick={this.getStyle} />
        <PopOverCard
          onClose={this.closePop}
          className={className}
          show={show}
          position={position}
          style={this.getStyle}
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
