import React from "react";
import {storiesOf} from "@storybook/react";
import ButtonIconText from "../../../components/buttons/ButtonIconText";
import Toggle from "../../../components/buttons/Toggle";
import ButtonText from "../../../components/buttons/ButtonText";
import ToggleButton from "../../../components/buttons/ToggleButton";


storiesOf("ButtonIconText", module)
    .add("Default", () => (
        <ButtonIconText
          text="botón"
          color="blue"
          icon="down"
          iconColor="white"
        />
    ))
  .add("Toggle", () => (
    <Toggle
      on="Activos"
      off="Inactivos"
      color="blue"
    />
  ))
  .add("ButtonText", () => (
    <ButtonText
      color="blue"
      text="loading"
      loading
    />
  ))
  .add("toggle button", () => (
    <ToggleButton
      color="blue"
    />
  ))
    .add("ButtonIconText with iconRight", () => (
        <ButtonIconText
          text="botón"
          color="blue"
          icon="down"
          iconColor="white"
          iconRight
          disabled
        />
    ));
