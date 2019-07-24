import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "../../../components/icons/Icon";

storiesOf("Icons", module)
  // Icons
  .add("Default", () => <Icon icon="phone" />);
