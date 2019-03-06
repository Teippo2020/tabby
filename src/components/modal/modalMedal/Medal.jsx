import React, { PureComponent } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import ModalBackground from "../ModalBackground";
import ModalCard from "../ModalCard";
import Modal from "../Modal";
import ModalHeader from "../ModalHeader";
import ModalFooter from "../ModalFooter";
import ButtonText from "../../buttons/ButtonText";
import Stars from "./../../../assets/svgs/stars.svg"
import MedalObjective from "./../../../assets/svgs/medal-objective.svg"
import MedalKR from "./../../../assets/svgs/medal_KR.svg"
import MedalCycle from "./../../../assets/svgs/medal_cycle.svg"
import MedalGeneric from "./../../../assets/svgs/Asset 29.svg"

class Medal extends PureComponent {

  //Props
  static propTypes = {
    medalName: PropTypes.string
  };


  render() {
    const { medalName } = this.props;
    return (
      <div>
        <img alt="Objective Medal" src={medalName}/>
      </div>
    );
  }
}
Medal.defaultProps = {
  medalName: "medalGeneric"
}
export default Medal;
