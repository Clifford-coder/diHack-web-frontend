/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  ColOneOfHeader,
  DeafIllustration,
  Heading,
  ColTwoOfHeader,
  Subheading,
  Main,
  MainHeading,
  Navigations,
  Navigation,
  SpeechToTextWrap,
  Microphone,
  TextArea,
  AudioPlayerWrapper,
  Audio,
  Source,
} from './styles';
import { Container } from '../../components/misc';
import deafIllustration from '../../assets/mask-for-the-deaf-animate.svg';
import Modal from '../../components/modal';

const index = () => {
  const [nav, setNav] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const navs = [
    'Text to speech',
    'Speech to text',
    'Learn Sign Language',
    'Emergency',
    'Examine Environment',
  ];

  const renderModalContent = () => {
    switch (nav) {
      case 'Text to speech':
        return (
          <>
            <Subheading style={{ fontWeight: 'bold' }}>
              Type to listen
            </Subheading>
            <p>Start typing and click the play button in order to listen</p>
            <TextArea placeholder="type here" />
            <AudioPlayerWrapper>
              <Audio controls autoplay loop>
                <Source src="" type="audio/mpeg" />
              </Audio>
            </AudioPlayerWrapper>
          </>
        );
      case 'Speech to text':
        return (
          <>
            <Subheading style={{ fontWeight: 'bold' }}>Tap to speak</Subheading>
            <SpeechToTextWrap>
              <Microphone className="fas fa-microphone-alt" />
            </SpeechToTextWrap>
          </>
        );
      case 'Emergency':
        return (
          <>
            <Subheading style={{ fontWeight: 'bold' }}>
              Describe Situation
            </Subheading>
            <p>Start typing and click the button to send</p>
            <TextArea placeholder="type here" />
            <SpeechToTextWrap>
              <Microphone className="fas fa-share-square" />
            </SpeechToTextWrap>
          </>
        );
      case 'Examine Environment':
        // to be discused later
        return (
          <>
            <Subheading style={{ fontWeight: 'bold' }}>
              Examine Environment
            </Subheading>
          </>
        );
      default:
        break;
    }
  };

  return (
    <Container>
      <Header>
        <ColTwoOfHeader>
          <Heading>Welcome to Depin</Heading>
          <Subheading>
            A place where everyone is heard{' '}
            <span role="img" aria-label="winking face">
              😉
            </span>
          </Subheading>
        </ColTwoOfHeader>
        <ColOneOfHeader>
          <DeafIllustration src={deafIllustration} />
        </ColOneOfHeader>
      </Header>
      <Main>
        <MainHeading>How do you want to communicate?</MainHeading>
        <Navigations>
          {navs.map((nav, i) => {
            return (
              <Navigation
                key={i}
                onClick={() => {
                  setNav(nav);
                  toggleModal();
                }}
                red={nav === 'Emergency' ? 'yes' : 'no'}
              >
                {nav === 'Learn Sign Language' ? (
                  <Link to="/learn-sign-lang">{nav}</Link>
                ) : (
                  nav
                )}
              </Navigation>
            );
          })}
        </Navigations>
        <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal}>
          {renderModalContent()}
        </Modal>
      </Main>
    </Container>
  );
};

export default index;
