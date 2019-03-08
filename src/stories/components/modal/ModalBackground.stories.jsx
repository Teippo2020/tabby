import React from "react";
import { storiesOf } from "@storybook/react";
import ModalBackground from "../../../components/modal/ModalBackground";

storiesOf("ModalBackground", module)
  // Modal Background
  .add("Default", () => <ModalBackground show />)
  .add("Red", () => <ModalBackground show color="red-d3" />)
  .add("Purple", () => <ModalBackground show color="purple-d3" />);
