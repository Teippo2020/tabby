getPositionRef = () => {
  const { left, top, right } = element.getBoundingClientRect();
  return {
    top, left, right, bottom
};
}

positionTop = () => {
  let topPop = getPositionRef().top - 16;
  let leftPop = getPositionRef().left
  return{
    topPop: `${topPop}px`,
    leftPop: `${leftPop}px`
  }
}

positionBottom = () => {
  let bottomPop = getPositionRef().bottom + 16;
  let leftPop = getPositionRef().left
  return{
    bottomPop: `${bottomPop}px`,
    leftPop: `${leftPop}px`
  }
}

positionLeft = () => {
  let leftPop = getPositionRef().left - 16;
  let topPop = getPositionRef().top
  return{
    leftPop: `${leftPop}px`,
    topPop: `${topPop}px`
  }
}

positionRight = () => {
  let rightPop = getPositionRef().right + 16;
  let topPop = getPositionRef().top
  return{
    rightPop: `${rightPop}px`,
    topPop: `${topPop}px`
  }
}