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
import Medal from "./../../../assets/svgs/Asset 29.svg"

class ModalMedal extends PureComponent {
  //Props
  static propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    medals: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    btnColor: PropTypes.string
  };

  render() {
    const { show, close, medals, title, btnText, btnColor, message } = this.props;
    return (
      <Modal show={show} className="modal--medal" close={close} >
        <div className="medals">
          {medals}
        </div>
        <ModalHeader title={title}/>
        <p>{message}</p>
        <ModalFooter>
          <ButtonText text={btnText} color={btnColor} />
        </ModalFooter>
      </Modal>
    );
  }
}
ModalMedal.defaultProps = {
  btnColor: "blue",
  show: true
}
export default ModalMedal;
