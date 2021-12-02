import React, { useRef } from 'react';
import { Subheading, WrittingPadActions } from '../styles';
import SignaturePad from 'react-signature-canvas';
import { PrimaryButton } from '../../../components/misc';

const Writtingpad = () => {
  const signatureCanvas = useRef({});

  return (
    <>
      <Subheading style={{ fontWeight: 'bold' }}>Write on the board</Subheading>
      <SignaturePad
        ref={signatureCanvas}
        canvasProps={{
          style: {
            border: '2px solid',
            borderColor: '#3e3e3e',
            marginBottom: '4px',
          },
        }}
      />
      <WrittingPadActions>
        <PrimaryButton
          color="red"
          style={{ marginRight: '4px' }}
          onClick={() => signatureCanvas.current.clear()}
        >
          <i class="fas fa-chalkboard" /> Clear
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
    </>
  );
};

export default Writtingpad;
