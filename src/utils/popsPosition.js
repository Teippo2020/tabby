// export function getPositionRef(element) {
//   const { left, top, right, bottom } = element.getBoundingClientRect();
//   return {
//     top,
//     left,
//     right,
//     bottom
//   };
// }

// export function positionTop(element) {
//   const topPop = getPositionRef(element).top - 16;
//   const leftPop = getPositionRef(element).left;
//   return {
//     top: `${topPop}px`,
//     left: `${leftPop}px`
//   };
// }
// export function positionBottom(element) {
//   const bottomPop = getPositionRef(element).bottom + 16;
//   const leftPop = getPositionRef(element).left;
//   return {
//     bottom: `${bottomPop}px`,
//     left: `${leftPop}px`
//   };
// }

// export function positionLeft(element) {
//   const leftPop = getPositionRef(element).left - 16;
//   const topPop = getPositionRef(element).top;
//   return {
//     left: `${leftPop}px`,
//     top: `${topPop}px`
//   };
// }

// export function positionRight(element) {
//   const rightPop = getPositionRef(element).right + 16;
//   const topPop = getPositionRef(element).top;
//   return {
//     right: `${rightPop}px`,
//     top: `${topPop}px`
//   };
// }

// export function openPop() {
//   this.setState({
//     show: true
//   });
//   console.log("aiudaa");
// }

// export function closePop() {
//   this.setState({
//     show: false
//   });
//   console.log("aiudaa");
// }

export function getPositionRef() {
  const node = this.activatorRef.current;
  console.log(node, "PAPA");
  if (!node) {
    return {};
  }
  console.log(node.firstChild.getBoundingClientRect(), "hijoooo");
  const { width, height } = node.firstChild.getBoundingClientRect();
  const { left, top, right, bottom } = node.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width,
    height
  };
}

export function getHeight() {
  const pop = this.popRef.current;
  if (!pop) {
    return {};
  }
  const { width, height } = pop.getBoundingClientRect();
  const widthPop = width;
  const heightPop = height;
  console.log(widthPop, heightPop, "pooooop");
  return {
    widthPop,
    heightPop
  };
}

export function getPosition() {
  let position = this.props.position
  const { left, right, top, bottom, width, height } = this.getPositionRef();
  const { widthPop, heightPop } = this.getHeight();
  const heightMargin = heightPop + 16;
  const widthMargin = widthPop + 16
  console.log(position);
  console.log(this.getPositionRef());


  if ( position === "left" && left < widthMargin) {
    position= "right"
  } else if ( position === "top" && top < heightMargin){
      position="bottom"
  } else if ( position === "right" && right < -widthMargin){
    position = "left"
  } else if ( position === "bottom" && bottom < height){
    position = "top"
  }
  console.log(position);
  if (position === "left") {
    const leftP = left - widthPop - 16;
    return {
      left: `${leftP}px`,
      top: `${top}px`
    };
  } else if (position === "right") {
    const rightP = left + width + 16;
    return {
      left: `${rightP}px`,
      top: `${top}px`
    };
  } else if (position === "top") {
    const topP = top - height - 16;
    return {
      top: `${topP}px`,
      left: `${top}px`
    };
  } else {
    const bottomP = left + height + 16;
    return {
      top: `${bottomP}px`,
      left: `${left}px`
    };
  }
}