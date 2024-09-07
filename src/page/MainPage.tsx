import React from 'react';

import Hero from '../components/Hero.tsx';
import {
  StyledContainerH,
  StyledFullContainer,
  StyledFullContainerH,
  StyledFullScreenSection,
  StyledSectionContainer,
} from '../components/styles/Container.styled.tsx';
import { StyledFont } from '../components/styles/Font.styled.tsx';

const MainPage: React.FC = () => {
  return (
    <StyledSectionContainer>
      <StyledFullScreenSection background="primary">
        <Hero />
      </StyledFullScreenSection>
      <StyledFullScreenSection background="white">
        <StyledFullContainer></StyledFullContainer>
        <StyledContainerH></StyledContainerH>
        <StyledFullContainerH></StyledFullContainerH>
        <StyledFont>Section 2</StyledFont>
      </StyledFullScreenSection>
      <StyledFullScreenSection background="secondary">
        Section 3
      </StyledFullScreenSection>
    </StyledSectionContainer>
  );
};

export default MainPage;
