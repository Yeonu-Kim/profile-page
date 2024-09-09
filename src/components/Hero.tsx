import { useRef } from 'react';

import {
  StyledContainer,
  StyledFullScreenSection,
} from '../components/styles/Container.styled.tsx';
import { StyledFadeUpFont } from '../components/styles/Font.styled.tsx';
import useIsVisible from '../hooks/useIsVisible.tsx';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIsVisible(ref);

  if (isVisible) {
    console.error('Hero');
  }
  return (
    <StyledFullScreenSection background="primary">
      <StyledContainer gap={4} color="white" align="center" ref={ref}>
        <StyledFadeUpFont delay={0}>만나서 반가워요!</StyledFadeUpFont>
        <StyledContainer color="white">
          <StyledFadeUpFont size="L" delay={0.3} bold>
            프론트엔드 세미나
          </StyledFadeUpFont>
          <StyledFadeUpFont size="XL" delay={0.6} bold>
            김연우입니다.
          </StyledFadeUpFont>
        </StyledContainer>
      </StyledContainer>
    </StyledFullScreenSection>
  );
};

export default Hero;
