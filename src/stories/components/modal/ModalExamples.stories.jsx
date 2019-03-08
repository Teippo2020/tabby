import React from "react";
import { storiesOf } from "@storybook/react";
import ModalHeader from "../../../components/modal/ModalHeader";
import Modal from "../../../components/modal/Modal";
import ModalMedal from "../../../components/modal/modalMedal/ModalMedal";
import Medal from "../../../components/modal/modalMedal/Medal";

storiesOf("ModalExamples", module)
  // Modal
  .add("Example", () => (
<Modal show={true}>
    <ModalHeader title="aaahhh"/>
  </Modal>
)  )
  .add("Modal Medal", () => (
    <ModalMedal
    title="GANASTEEE"
    message="Gaaanassteeeeeeeee"
    btnText="Okkkkkrrrr"
    show
    >
      <Medal medalSrc="https://s3.us-east-2.amazonaws.com/pulsarup-assets-dev/medals-images/medal_objective.svg" key="medal_1"/>
      <Medal medalSrc="https://s3.us-east-2.amazonaws.com/pulsarup-assets-dev/medals-images/medal_gold.svg" key="medal_2"/>
      <Medal medalSrc="https://s3.us-east-2.amazonaws.com/pulsarup-assets-dev/medals-images/medal_KR.svg" key="medal_3"/>
    

      </ModalMedal>
));
