import React from "react";
import { storiesOf } from "@storybook/react";
import ModalContainer from "../../../components/modal/ModalContainer";

storiesOf("ModalContainer", module)
  // Modal
  .add("Container", () => <ModalContainer />);
