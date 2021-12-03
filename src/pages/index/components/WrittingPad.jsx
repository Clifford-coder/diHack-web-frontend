import React, { useRef } from 'react';
import { Subheading, WrittingPadActions } from '../styles';
import SignaturePad from 'react-signature-canvas';
import { PrimaryButton } from '../../../components/misc';
import './WrittingPad.css';

const Writtingpad = () => {
  const signatureCanvas = useRef({});

  return (
    <>
      <div
        style={{
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Subheading style={{ fontWeight: 'bold' }}>
          Write on the board
        </Subheading>
        <div className="SignaturePadWrapper">
          <SignaturePad
            ref={signatureCanvas}
            canvasProps={{
              className: 'signatureCanvas',
            }}
          />
        </div>
        <WrittingPadActions>
          <PrimaryButton
            color="red"
            style={{ marginRight: '4px' }}
            onClick={() => signatureCanvas.current.clear()}
          >
            <i className="fas fa-chalkboard" /> Clear
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              const data = signatureCanvas.current.toData();
              if (data) {
                data.pop();
                signatureCanvas.current.fromData(data);
              }
            }}
          >
            <i className="fas fa-undo-alt" /> Undo
          </PrimaryButton>
        </WrittingPadActions>
      </div>
    </>
  );
};

export default Writtingpad;
