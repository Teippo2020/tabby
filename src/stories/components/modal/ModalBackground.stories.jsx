import React from "react";
import { storiesOf } from "@storybook/react";
import ModalBackground from "../../../components/modal/ModalBackground"

storiesOf("Modal", module)
//Modal Background
  .add("Modal Background", () => <ModalBackground />);
