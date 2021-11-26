import React from 'react';
import { StyledModal, CloseModalButton, CloseIcon } from './styles';

const Modal = ({ modalIsOpen, toggleModal }) => {
  console.log('modeia lis opme -----', modalIsOpen);
  return (
    <StyledModal
      closeTimeoutMS={300}
      className="mainHeroModal"
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      shouldCloseOnOverlayClick={true}
    >
      <CloseModalButton onClick={toggleModal}>
        <CloseIcon className="far fa-times-circle" />
      </CloseModalButton>
      <h1 style={{ height: '95%' }}>Hi there</h1>
    </StyledModal>
  );
};

export default Modal;
