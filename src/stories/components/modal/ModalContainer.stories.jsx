import React from "react";
import { storiesOf } from "@storybook/react";
import ModalContainer from "../../../components/modal/ModalContainer";
import ModalMedal from "../../../components/modal/modalMedal/ModalMedal";
import Medal from "../../../components/modal/modalMedal/Medal";

storiesOf("ModalContainer", module)
  // Modal
  .add("Container", () => <ModalContainer />)
  .add("Modal Medal",() => <ModalMedal 
                              title="GANASTEEE" 
                              message="Gaaanassteeeeeeeee" 
                              btnText="Okkkkkrrrr"
                              medals={
                                <Medal/>
                              }
                          />);
