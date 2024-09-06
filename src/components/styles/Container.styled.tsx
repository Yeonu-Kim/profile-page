import styled from 'styled-components';

interface SectionProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export const StyledFullScreenSection = styled.div<SectionProps>`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;
