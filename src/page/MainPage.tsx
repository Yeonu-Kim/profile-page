import React from 'react';

import AboutMe from '../components/AboutMe.tsx';
import Contact from '../components/Contact.tsx';
import Hero from '../components/Hero.tsx';
import MBTI from '../components/MBTI.tsx';
import { StyledSectionContainer } from '../components/styles/Container.styled.tsx';
import WhyWaffle from '../components/WhyWaffle.tsx';

const MainPage: React.FC = () => {
  return (
    <StyledSectionContainer>
      <Hero />
      <AboutMe />
      <WhyWaffle />
      <MBTI />
      <Contact />
    </StyledSectionContainer>
  );
};

export default MainPage;
