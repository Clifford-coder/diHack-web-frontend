import React from 'react';
import Modal from 'react-modal';
import ReactModal from 'react-modal';

/* This just wraps react-modal to allow styling the modal overlay, you shouldn't have the need to change this at all */
const ReactModalAdaptor = ({ className, ...props }) => {
  ReactModal.setAppElement('#root'); // suppresses modal-related test warnings.
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(32, 32, 32, 0.75)',
    },
  };

  return <Modal style={customStyles} {...props} />;
};

export default ReactModalAdaptor;
