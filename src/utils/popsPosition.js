/**
 * @function getActivatorPosition - Returns width, height and position of the activator
 * @param {node} node
 */
export function getActivatorPosition(activator) {
  if (!activator) {
    return {};
  }
  const { width, height } = activator.firstChild.getBoundingClientRect();
  const { left, top, right, bottom } = activator.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width,
    height
  };
}
/**
 * @function getPopDimensions - Returns width, height of the popOver
 * @param {node} pop
 */
export function getPopDimensions(pop) {
  if (!pop) {
    return {};
  }
  const { width, height } = pop.getBoundingClientRect();
  const widthPop = width;
  const heightPop = height;
  return {
    widthPop,
    heightPop
  };
}

/**
 * @function verifyPosition - Returns the position of the popOver
 * @param {string} position
 * @param {node} node
 * @param {node} pop
 */
export function verifyPosition(position, activator, pop) {
  if (!activator) {
    return {};
  }
  const { left, right, top, bottom, width, height } = getActivatorPosition(
    activator
  );
  console.log(right)
  console.log(top, 'yo soy la altira')
  const { widthPop, heightPop } = getPopDimensions(pop);
  const heightMargin = heightPop + 8;
  const widthMargin = widthPop + 8;
  let newPosition = position;
  const popRight = window.innerWidth - (left + width);
  console.log(heightPop)
  console.log(window.innerWidth)
  console.log(right, popRight)
  if (position === "top" && top < heightMargin) {
    newPosition = "bottom"
} else if (position === "bottom" && bottom < heightMargin) {
    newPosition = "top"
} else if (top < heightMargin && bottom < heightMargin){
  newPosition = "center"
}
return newPosition;




  // if (position === "left" && left < widthMargin) {
  //     newPosition = "right"
  // } else if (position === "top" && top < heightMargin) {
  //     newPosition = "bottom"
  // } else if (position === "right" && right < popRight) {
  //     newPosition = "left"
  // } else if (position === "bottom" && bottom < height) {
  //     newPosition = "top"
  // }
  // return newPosition;
  
  //
  // if (newPosition === "left") {
  //   const leftP = left - widthPop - 16;
  //   return {
  //     left: `${leftP}px`,
  //     top: `${top}px`
  //   };
  // }
  // if (newPosition === "right") {
  //   const rightP = left + width - 16;
  //   return {
  //     right: `${rightP}px`
  //   };
  // } else if (newPosition === "top") {
  //   const topP = top - height - 16;
  //   return {
  //     top: `${topP}px`,
  //     left: `${top}px`
  //   };
  // } else {
  //   const bottomP = top + height + 16;
  //   return {
  //     top: `${bottomP}px`,
  //   };
  // }
}

export function popPosition(position,activator, pop){
  const newPosition = verifyPosition(position, activator, pop)
  const { left, right, top, bottom, width, height } = getActivatorPosition(
    activator
  );
  const { widthPop, heightPop } = getPopDimensions(pop);

  const windowWidth = window.innerWidth
  const topActivator = activator.offsetTop;
  const leftActivator = activator.offsetLeft;
  const widthActivator = activator.offsetWidth;
  const heightActivator = activator.offsetHeight;

  const widthActivatorAndPop = widthPop + left;
  console.log(windowWidth, 'yo soy la ventanaaaa')
  console.log(widthActivatorAndPop, 'suma')
  console.log(left, ' yo soy leftt')
  const diff = widthActivatorAndPop - windowWidth
  const space = windowWidth - widthActivatorAndPop
  console.log(diff, 'diiifff')
  console.log(widthPop, 'yo spy gordooo')
  console.log(diff, 'yo soy el espacio libreeee')
  console.log(newPosition)

  // if (!activator) {
  //   return {};
  // }
  if(newPosition === "top" &&  diff < widthActivatorAndPop){
    console.log('aiuddaaa')
    const popTop = topActivator + heightActivator + 8
    const leftPop = leftActivator + diff + 8
    return{
      left: `${leftPop}px`,
      top: `${popTop}px`
    }
  }else if ( newPosition === "top" && diff > widthActivatorAndPop){
    console.log(left, 'jeellppsss')
    const popTop = topActivator + heightActivator + 8
    return{
      left: `${leftActivator}px`,
      top: `${popTop}px`
    }
  }

}

// export function popPosition(position,activator, pop){
//   const newPosition = verifyPosition(position, activator, pop)
//   const { widthPop, heightPop } = getPopDimensions(pop);
//   const top = activator.offsetTop;
//   const left = activator.offsetLeft;
//   const width = activator.offsetWidth;
//   const height = activator.offsetHeight;

//   if( newPosition === "left" ){
//     const leftPop = left - widthPop - 16
//     console.log('si me cambiee')
//     return{
//       left: `${leftPop}px`,
//       top: `${top}px`
//     }
//   }else if( newPosition === "top" ){
//     const topPop = top  + 16
//     return{
//       left: `${left}px`,
//       bottom: `${topPop}px`
//     }
//   } else   if( newPosition === "right" ){
//     const leftPop = left + width + 16
//     console.log(leftPop)
//     return{
//       left: `${leftPop}px`,
//       top: `${top}px`
//     }
//   } else   if( newPosition === "bottom" ){
//     const topPop = top + height + 16
//     return{
//       left: `${left}px`,
//       top: `${topPop}px`
//     }
//   }

// }