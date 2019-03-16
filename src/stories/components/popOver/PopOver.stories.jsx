import React from "react";
import { storiesOf } from "@storybook/react";
import PopOver from "../../../components/popOver/PopOver";
import ButtonText from "../../../components/buttons/ButtonText";
import { State, Store } from "@sambego/storybook-state";

const store = new Store({
  show: false
});
storiesOf("Pop Over", module)
  // Moda
  .add("Default", () => (
    <div className="width-200">
      <State store={store}>
        <PopOver
          activator={
          <ButtonText color="red" text="Poooop" onClick={() => store.set({ show: !store.get("show") })}/> 
          } position="top"
          onClose={() => store.set({ show: !store.get("show") })}>
            <p> Holi</p>
        </PopOver>
      </State>
    </div>

  ));
