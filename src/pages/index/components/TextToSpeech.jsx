import React from 'react';
import {
  TextArea,
  AudioPlayerWrapper,
  Audio,
  Source,
  Subheading,
} from '../styles';

const Texttospeech = () => {
  return (
    <>
      <Subheading style={{ fontWeight: 'bold' }}>Type to listen</Subheading>
      <p>Start typing and click the play button in order to listen</p>
      <TextArea placeholder="type here" />
      <AudioPlayerWrapper>
        <Audio controls autoplay loop>
          <Source src="" type="audio/mpeg" />
        </Audio>
      </AudioPlayerWrapper>
    </>
  );
};

export default Texttospeech;
