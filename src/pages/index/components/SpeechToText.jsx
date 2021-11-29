import React from 'react';
import { Subheading, SpeechToTextWrap, Microphone } from '../styles';

const Speechtotext = () => {
  return (
    <>
      <Subheading style={{ fontWeight: 'bold' }}>Tap to speak</Subheading>
      <SpeechToTextWrap>
        <Microphone className="fas fa-microphone-alt" />
      </SpeechToTextWrap>
    </>
  );
};

export default Speechtotext;
