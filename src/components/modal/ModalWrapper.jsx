import React, { PureComponent } from "react";
import ModalBackground from "./ModalBackground";
import Modal from "./Modal";

class ModalWrapper extends PureComponent {
  render(){
    return (
            <div className="modal--wrapper">
              <ModalBackground/>
              <Modal>
                <p>Holiii</p>
              </Modal>
            </div>
    );
      }
  }


export default ModalWrapper;
