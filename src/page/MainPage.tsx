import React from 'react';
import { useRef } from 'react';

import AboutMe from '../components/AboutMe.tsx';
import Contact from '../components/Contact.tsx';
import Hero from '../components/Hero.tsx';
import MBTI from '../components/MBTI.tsx';
import {
  StyledFullScreenSection,
  StyledSectionContainer,
} from '../components/styles/Container.styled.tsx';
import WhyWaffle from '../components/WhyWaffle.tsx';
// import useIsVisible from '../hooks/useIsVisible.tsx';

const MainPage: React.FC = () => {
  // const ref = useRef<HTMLElement>(null);
  // const isVisible = useIsVisible(ref);

  return (
    <StyledSectionContainer>
      <StyledFullScreenSection background="primary">
        <Hero />
      </StyledFullScreenSection>
      <StyledFullScreenSection background="white">
        <AboutMe />
      </StyledFullScreenSection>
      <StyledFullScreenSection background="secondaryBright">
        <WhyWaffle />
      </StyledFullScreenSection>
      <StyledFullScreenSection background="white">
        <MBTI />
      </StyledFullScreenSection>
      <StyledFullScreenSection background="secondary">
        <Contact />
      </StyledFullScreenSection>
    </StyledSectionContainer>
  );
};

export default MainPage;
