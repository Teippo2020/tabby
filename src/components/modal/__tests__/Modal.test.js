import React from "react";
import { shallow } from "enzyme";
import "jest-extended";
import sinon from "sinon";

import Modal from "../Modal";

describe("Modal", () => {
  it("should render correctly with default state", () => {
    const props = {
      show: false,
      children: <div />,
      onClose: () => {}
    };
    const component = shallow(<Modal {...props} />);
    expect(component).toMatchSnapshot();
  });
});

describe("Modal render correct show prop", () => {
  const props = {
    show: false,
    children: <div />,
    onClose: () => {}
  };
  const component = shallow(<Modal {...props} />);
  it("check proptype", () => {
    expect(component.hasClass("hidden")).toEqual(true);
  });

  it("check proptype", () => {
    const propsVisible = {
      show: true,
      children: <div />,
      onClose: () => {}
    };
    const componentVisible = shallow(<Modal {...propsVisible} />);
    expect(componentVisible.hasClass("hidden")).toEqual(false);
  });
  it("render correct onClose prop on ModalBackground", () => {
    const ModalBackground = shallow(<Modal {...props} />).find(
      "ModalBackground"
    );
    expect(ModalBackground.props().onClose).toBeFunction();
  });
  it("render the same onClose func on ModalBackground", () => {
    const ModalBackground = shallow(<Modal {...props} />).find(
      "ModalBackground"
    );
    expect(ModalBackground.props().onClose).toEqual(props.onClose);
  });
  it("render correct onClose prop on ModalCard", () => {
    const ModalCard = shallow(<Modal {...props} />).find("ModalCard");
    expect(ModalCard.props().onClose).toBeFunction();
  });
  it("render the same onClose func on ModalCard", () => {
    const ModalBackground = shallow(<Modal {...props} />).find("ModalCard");
    expect(ModalBackground.props().onClose).toEqual(props.onClose);
  });
});

// describe("Close func", () => {
//   it("onClose called", () => {
//     const close = sinon.stub();
//     close.returns("alvvvv");
//     const componentC = shallow(<Modal show onClose={close()} />).find(
//       "ModalBackground"
//     );
//     componentC.simulate("click");
//     expect(componentC.length).toEqual(1);
//     expect(close.called).toBeTruthy();
//   });
// });
