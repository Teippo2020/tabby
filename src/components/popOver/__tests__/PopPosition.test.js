import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import {getActivatorPosition, getPopDimensions, popXPosition, popYPosition } from "./../../../utils/popsPosition"

describe("PopOver", () => {
  // const close = sinon.stub();
  // let props;
  // beforeEach(() => {
  //   props = {
  //     show: false,
  //     children: <div/>,
  //     onClose: close,
  //     activator: <ButtonText color="blue" onClick={() => {}} text="Activator" />
  //   }
  // });

  it("should return activator's position", () => {
    const ActivatorPosition = getActivatorPosition();
    expect(ActivatorPosition).toBeDefined();
  });

});