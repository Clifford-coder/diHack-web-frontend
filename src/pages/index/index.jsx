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
  Navigations,
  Navigation,
} from './styles';
import deafIllustration from '../../assets/mask-for-the-deaf-animate.svg';
import Modal from '../../components/modal';
import { Link } from 'react-router-dom';

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
        <Modal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
      </Main>
    </Container>
  );
};

export default index;
