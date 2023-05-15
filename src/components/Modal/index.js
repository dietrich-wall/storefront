import React, { useState } from "react";
import styled from "styled-components";
import { ModalProvider, BaseModalBackground } from "styled-react-modal";
import { StyledModal, ModalNav, ModalBtn} from './ModalElements';

export default function ModalButton(hidden = false) {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(20);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
  `;

  return (
    <div>
      <ModalProvider backgroundComponent={FadingBackground}> 
      <ModalNav hidden={{hidden}}>
        <ModalBtn onClick={toggleModal}> Modal button </ModalBtn>
      </ModalNav>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal} 
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        
        <div><span>I am a modal!</span></div>
        <ModalBtn onClick={toggleModal}>Close me</ModalBtn>
      </StyledModal>
      </ModalProvider>
    </div>
  );
}

