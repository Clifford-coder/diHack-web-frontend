import React from 'react';
import { PageWrapper, Image } from './styles';
import imgSrc from '../../assets/404-found.svg';
import { PrimaryButton } from '../../components/misc';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Image src={imgSrc} alt="page-not-found" />
      <PrimaryButton onClick={() => navigate('/home', { replace: true })}>
        Go back home
      </PrimaryButton>
    </PageWrapper>
  );
};

export default Notfound;
