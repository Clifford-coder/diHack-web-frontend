import React from 'react';
import {
  Subheading,
  SpeechToTextWrap,
  Microphone,
  TextBox,
  H4,
} from '../styles';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

const Speechtotext = () => {
  const [isListening, setIsListening] = React.useState(false);
  const [note, setNote] = React.useState(null);

  React.useEffect(() => {
    handleListen();
  }, [isListening]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleListen = () => {
    try {
      if (isListening) {
        mic.start();
        mic.onend = () => {
          mic.start();
        };
      } else {
        mic.stop();
        mic.onend = () => {};
      }
      mic.onstart = () => {
        console.log('Starrrrrt');
      };

      mic.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');
        setNote(transcript);
        mic.onerror = (event) => {
          console.log(event.error);
          // return toast.error('There was error in converting speech to text');
        };
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Subheading style={{ fontWeight: 'bold' }}>Tap and speak</Subheading>
      <p style={{ fontStyle: 'italic' }}>
        Tap and start speaking. You can click on the stop button to stop if you
        wish to.
      </p>
      <SpeechToTextWrap
        onClick={() => setIsListening((prevState) => !prevState)}
        isRed={isListening}
      >
        <Microphone
          className={
            isListening ? 'fas fa-stop-circle' : 'fas fa-microphone-alt'
          }
        />
      </SpeechToTextWrap>
      <em>{isListening ? 'tap to stop' : 'tap to speak'}</em>
      <H4> Text will appear here</H4>
      <TextBox>
        <p>{note}</p>
      </TextBox>
    </>
  );
};

export default Speechtotext;
