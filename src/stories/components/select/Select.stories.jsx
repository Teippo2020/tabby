import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "../../../components/select/Select"

const options= [
  {
    title: "Yo soy una opción bonita",
    icon: "world",
    id: 1,
    value: "Opción 1",
    selected: false
  },
  {
    title: "Yo soy una opción más bonita",
    icon: "flag-outline",
    id: 2,
    value: "Opción 2",
    selected: false
  },
  {
    title: "Yo soy una opción muuucho más bonita",
    icon: "planet-outline",
    id: 3,
    value: "Opción 3"
  },
  {
    title: "Yo soy una opción meeeh bonita",
    icon: "flag-outline",
    id: 2,
    value: "Opción 4"
  },
  {
    title: "Yo soy una opción equisss",
    icon: "flag-outline",
    id: 2,
    value: "Opción 5"
  }
]
storiesOf("Select", module)
  // Input
  .add("Default", () => (

  <Select name="default" options={options} placeholder="Soy un select bien shidooooo" icon="world" >
    
  </Select>
  ))
  ;
