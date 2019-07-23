import React from "react";
import {storiesOf} from "@storybook/react";
import InputIcon from "../../../components/input/InputIcon";


storiesOf("InputIcon", module)
    .add("Default", () => (
        <InputIcon
          icon="planet-outline"
        />
    ))
    .add("InputIcon with error style", () => (
        <InputIcon
          icon="planet-outline"
          showError
        />
    ));
