/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Container } from '../../components/misc';
import {
  Header,
  ColOneOfHeader,
  DeafIllustration,
  Heading,
  ColTwoOfHeader,
  Subheading,
  Main,
  MainHeading,
  MainSubheading,
  Navigations,
  Navigation,
} from './styles';
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
    'Voice Expression',
  ];

  return (
    <Container>
      <Header>
        <ColTwoOfHeader>
          <Heading>Welcome to blahblah</Heading>
          <Subheading>
            Enjoy your stay around buddy{' '}
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
        <MainHeading>What you wanna do?</MainHeading>
        <MainSubheading>
          Please Select your activity and ypu woll be fine.
        </MainSubheading>
        <Navigations>
          {navs.map((nav, i) => {
            return (
              <Navigation
                key={i}
                onClick={() => {
                  setNav(nav);
                  toggleModal();
                }}
              >
                {nav}?
              </Navigation>
            );
          })}
        </Navigations>
        <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
      </Main>
    </Container>
  );
};

export default index;
