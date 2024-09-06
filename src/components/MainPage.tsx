import React from 'react';

import {
  StyledContainer,
  StyledFullScreenSection,
} from './styles/Container.styled.tsx';

const MainPage: React.FC = () => {
  return (
    <StyledContainer>
      <StyledFullScreenSection backgroundColor="red">
        Section 1
      </StyledFullScreenSection>
      <StyledFullScreenSection backgroundColor="greed">
        Section 2
      </StyledFullScreenSection>
      <StyledFullScreenSection backgroundColor="black">
        Section 3
      </StyledFullScreenSection>
    </StyledContainer>
  );
};

export default MainPage;
