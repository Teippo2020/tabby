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
    if(!node){
      return{

    }
  }
    // console.log(node.firstChild);
    const { left, top, right, bottom } = node.getBoundingClientRect();
    return {
      top,
      left,
      right,
      bottom
    };
  }

  getPosition(){
    const position = this.props.position;
    this.getPositionRef()
    console.log(position)
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
        right: rightP + 'px',
        top: topP + 'px'
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


  getStyle = () => {
    this.getPosition();
    console.log(this.getPosition())
    console.log("aiudaaaa no tengo estilooo");
  };

  render() {
    const { onClose, children, className, activator, position } = this.props;
    const { show } = this.state;
    const { left, right, top, bottom } = this.getPosition();
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="pop-over--wrapper" ref={this.setReference}>
        <div ref={this.activatorRef} id="activator">
          {activator}
        </div>

        <ButtonText color="blue" text="gg" onClick={this.getPosition} />
        <PopOverCard
          onClose={this.closePop}
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
