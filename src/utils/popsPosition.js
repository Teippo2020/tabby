export function getPositionRef(node) {
  if (!node) {
    return {};
  }
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

export function getHeight(pop) {
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

export function getPosition(position) {
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