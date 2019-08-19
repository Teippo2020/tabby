import React from "react";
import {storiesOf} from "@storybook/react";
import ButtonIconText from "../../../components/buttons/ButtonIconText";



storiesOf("ButtonIconText", module)
    .add("Default", () => (
        <ButtonIconText
          text="botón"
          color="blue"
          icon="down"
          iconColor="white"
        />
    ))

  .add("Loading", () => (
    <ButtonIconText
      text="botón"
      color="blue"
      icon="down"
      iconColor="white"
      loading
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
