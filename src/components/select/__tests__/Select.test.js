import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";

import Select from "../Select";

describe("Select", () => {
  let props;
  beforeEach(() => {
    props = {
      placeholder: "Selecciona",
      options: [
        {
          title: "Yo soy la opción 1",
          icon: "top",
          id: "1",
          value: "option 1"
        },
        {
          title: "Yo soy la opción 2",
          icon: "left",
          id: "2",
          value: "option 2"
        },
        {
          title: "Yo soy la opción 3",
          icon: "right",
          id: "3",
          value: "option 3"
        }
      ]
    };
  });

  it("should render correctly with default state", () => {
    const component = shallow(<Select {...props} />);
    expect(component).toMatchSnapshot();
  });
  it("should change state when you click on SelectHeader", () => {
    const click = sinon.spy();
    const component = shallow(<Select {...props} onClick={click} />);
    component.find("SelectHeader").simulate("click");
    expect(component.state().listOpen).toEqual(true);
  });
  it("should select one option from the list", () => {
    const click = sinon.spy();
    const component = mount(<Select {...props} onClick={click} />);
    component.find("SelectHeader").simulate("click");
    component.find({ value: "option 2" }).simulate("click");
    expect(component.state().selectedValue).toEqual("option 2");
  });
  it("should change title when you selected one option", () => {
    const click = sinon.spy();
    const component = mount(<Select {...props} onClick={click} />);
    component.find("SelectHeader").simulate("click");
    component.find({ value: "option 2" }).simulate("click");
    expect(component.state().title).toEqual("Yo soy la opción 2");
  });
  it("should chnage state when you click outside", () => {
    const wrapper = mount(
      <div>
        <Select {...props} />
      </div>
    );
    wrapper.find("SelectHeader").simulate("click");
    const event = new MouseEvent("mousedown");
    document.dispatchEvent(event);
    expect(wrapper.find(Select).state().listOpen).toEqual(false);
  });
});
