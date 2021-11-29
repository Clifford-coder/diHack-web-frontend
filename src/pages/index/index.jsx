/* eslint-disable no-restricted-globals */
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
} from './styles';
import { Container } from '../../components/misc';
import deafIllustration from '../../assets/mask-for-the-deaf-animate.svg';
import Modal from '../../components/modal';
import Texttospeech from './components/TextToSpeech';
import Emergency from './components/Emergency';
import Speechtotext from './components/SpeechToText';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const index = () => {
  const [nav, setNav] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  //get user location
  useEffect(() => {
    if (navigator.geolocation) {
      (async () => {
        try {
          navigator.geolocation.getCurrentPosition(function (position) {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accurary: position.coords.accuracy,
            });
          });
          const permissionToUseLoc = await navigator.permissions.query({
            name: 'geolocation',
          });
          if (permissionToUseLoc.state === 'denied') {
            alert(
              'Please accept allow us to access your location, otherwise we cannot notify your sos incase there is an emergency'
            );
          }
        } catch (error) {
          console.log(error);
          return toast.error('Error occured in getting your location');
        }
      })();
    } else {
      toast.warn('GeoLocation service not supported in your browser');
    }
  }, []);

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
        return <Texttospeech />;
      case 'Speech to text':
        return <Speechtotext />;
      case 'Emergency':
        return <Emergency userLocation={userLocation} />;
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
