import React, { useState } from 'react';
import { TextArea, Subheading, Microphone, SpeechToTextWrap } from '../styles';

const Texttospeech = () => {
  // todo : We can add volume pitch and rate.
  // todo : Add multiple available voices
  // todo: Add play and resume functionalities
  const [voices, setVoices] = useState([]);
  const [text, setText] = useState('');

  const convertTextToSpeech = () => {
    try {
      let speech = new SpeechSynthesisUtterance();
      speech.text = text;
      window.speechSynthesis.speak(speech);
      speech.voice = voices[0];
      speech.volume = 1;
      speech.lang = 'en';
      speech.rate = 1;
      speech.pitch = 1;
    } catch (error) {
      console.log(error);
    }
  };

  // get available voices
  React.useEffect(() => {
    (async () => {
      function setSpeech() {
        return new Promise(function (resolve, reject) {
          let synth = window.speechSynthesis;
          let id;

          id = setInterval(() => {
            if (synth.getVoices().length !== 0) {
              resolve(synth.getVoices());
              clearInterval(id);
            }
          }, 10);
        });
      }
      const voices = await setSpeech();
      setVoices(voices);
    })();
  }, []);

  return (
    <>
      <Subheading style={{ fontWeight: 'bold' }}>Type to listen</Subheading>
      <p>Start typing and click the play button in order to listen</p>
      <TextArea
        placeholder="type here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SpeechToTextWrap onClick={convertTextToSpeech}>
        <Microphone className="far fa-play-circle" />
      </SpeechToTextWrap>
      <h4
        style={{ color: '#f82929', fontWeight: 'bold' }}
        onClick={() => {
          setText('');
          window.speechSynthesis.cancel();
        }}
      >
        Cancel
      </h4>
    </>
  );
};

export default Texttospeech;
