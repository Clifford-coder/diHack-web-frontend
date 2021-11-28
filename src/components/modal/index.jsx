import React from 'react';
import {
  StyledModal,
  CloseModalButton,
  CloseIcon,
  CloseIconWrap,
  ContentCenter,
} from './styles';

const Modal = ({ modalIsOpen, toggleModal, children }) => {
  return (
    <StyledModal
      closeTimeoutMS={200}
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      shouldCloseOnOverlayClick={true}
    >
      <CloseIconWrap>
        <CloseModalButton onClick={toggleModal}>
          <CloseIcon className="far fa-times-circle" />
        </CloseModalButton>
      </CloseIconWrap>
      <ContentCenter>{children}</ContentCenter>
    </StyledModal>
  );
};

export default Modal;
