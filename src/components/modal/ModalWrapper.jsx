import React, { PureComponent } from "react";
import ModalBackground from "./ModalBackground";
import Modal from "./Modal";
import ModalFooter from "./ModalFooter";
import ButtonText from "../Buttons/ButtonText";

class ModalWrapper extends PureComponent {
  render(){
    return (
            <div className="modal--wrapper">
              <ModalBackground/>
              <Modal>
                  <div className="modal--header">
                    <h2>Header</h2>
                  </div>
                  <div className="modal--content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci felis, molestie id turpis eu, pretium malesuada libero. Maecenas nisi elit, posuere posuere ullamcorper et, ultricies vel erat. Vestibulum a tortor maximus, tempus est in, condimentum dolor. Donec cursus pharetra fermentum. Maecenas ultrices at odio eu mattis. Nullam dictum ante a eros pharetra, eget eleifend lectus viverra. In dictum sem quis dapibus finibus. Etiam gravida quam augue. Morbi eget lorem augue. Pellentesque odio purus, tempor eget lacus id, luctus dignissim tortor. Donec hendrerit tellus libero, vitae consequat magna sodales cursus. Pellentesque sit amet sem arcu.</p>
                  </div>
                  <ModalFooter>
                    <ButtonText text="Cancelar" color="gray" />
                    <ButtonText text="Aceptar" color="blue" />
                  </ModalFooter>
                </Modal>
            </div>
    );
      }
  }


export default ModalWrapper;
