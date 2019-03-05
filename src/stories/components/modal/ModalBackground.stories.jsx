import React from "react";
import { storiesOf } from "@storybook/react";
import ModalBackground from "../../../components/modal/ModalBackground";

storiesOf("ModalWrapper", module)
  //Modal
  .add("ss", () => <ModalBackground show={true} />);
