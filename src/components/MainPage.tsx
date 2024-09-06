import React from 'react';

import {
  StyledFullScreenSection,
  StyledSectionContainer,
} from './styles/Container.styled.tsx';
import {
  StyledContainer,
  StyledContainerH,
  StyledFullContainer,
  StyledFullContainerH,
} from './styles/Container.styled.tsx';
import { StyledFont } from './styles/Font.styled.tsx';

const MainPage: React.FC = () => {
  return (
    <StyledSectionContainer>
      <StyledFullScreenSection backgroundColor="red">
        <StyledContainer>
          <StyledFont>Section 1</StyledFont>
          <StyledFont size={2.4} bold>
            Section 1.5
          </StyledFont>
        </StyledContainer>
        <StyledContainerH></StyledContainerH>
        <StyledFullContainer></StyledFullContainer>
        <StyledFullContainerH></StyledFullContainerH>
      </StyledFullScreenSection>
      <StyledFullScreenSection backgroundColor="greed">
        Section 2
      </StyledFullScreenSection>
      <StyledFullScreenSection backgroundColor="black">
        Section 3
      </StyledFullScreenSection>
    </StyledSectionContainer>
  );
};

export default MainPage;
