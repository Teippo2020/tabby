import React from "react";
import { storiesOf } from "@storybook/react";
import PopOver from "../../../components/popOver/PopOver";
import ButtonText from "../../../components/buttons/ButtonText";


storiesOf("Pop Over", module)
  // Modal
  .add("Default", () => (
    <PopOver activator={<ButtonText color="red" text="Poooop"/> } position="right">
    </PopOver>
  ));
