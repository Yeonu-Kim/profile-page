import React from 'react';

import AboutMe from '../components/AboutMe.tsx';
import Career from '../components/Career.tsx';
import Hero from '../components/Hero.tsx';
import {
  StyledContainerH,
  StyledFullContainer,
  StyledFullContainerH,
  StyledFullScreenSection,
  StyledSectionContainer,
} from '../components/styles/Container.styled.tsx';
import { StyledFont } from '../components/styles/Font.styled.tsx';
import WhyWaffle from '../components/WhyWaffle.tsx';

const MainPage: React.FC = () => {
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
        <Career />
      </StyledFullScreenSection>
      <StyledFullScreenSection background="secondary">
        <StyledFullContainer></StyledFullContainer>
        <StyledContainerH></StyledContainerH>
        <StyledFullContainerH></StyledFullContainerH>
        <StyledFont>Section 3</StyledFont>
      </StyledFullScreenSection>
    </StyledSectionContainer>
  );
};

export default MainPage;
