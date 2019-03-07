import React from "react";
import { storiesOf } from "@storybook/react";
import ModalContainer from "../../../components/modal/ModalContainer";
import ModalMedal from "../../../components/modal/modalMedal/ModalMedal";
import Medal from "../../../components/modal/modalMedal/Medal";

storiesOf("ModalContainer", module)
  // Modal
  .add("Container", () => <ModalContainer />)
  .add("Modal Medal", () => (
    <ModalMedal
      title="GANASTEEE"
      message="Gaaanassteeeeeeeee"
      btnText="Okkkkkrrrr"
      show
      >
        <Medal medalSrc="https://s3.us-east-2.amazonaws.com/pulsarup-assets-dev/medals-images/medal_objective.svg" key="medal_1"/>
        <Medal medalSrc="https://s3.us-east-2.amazonaws.com/pulsarup-assets-dev/medals-images/medal_objective.svg" key="medal_2"/>
        <Medal medalSrc="https://s3.us-east-2.amazonaws.com/pulsarup-assets-dev/medals-images/medal_objective.svg" key="medal_3"/>
      

        </ModalMedal>));
