import type { MouseEvent } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

import useIsVisible from '../hooks/useIsVisible.tsx';
import QnA from './common/QnA';
import { StyledArrowButton } from './styles/Button.styled.tsx';
import {
  StyledContainer,
  StyledContainerH,
  StyledFullScreenSection,
} from './styles/Container.styled';
import { StyledFadeUpFont, StyledFont } from './styles/Font.styled.tsx';

const AboutMe = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIsVisible(ref);

  const ScrollBanner = () => {
    const items = ['김연우', '조경학과', '21학번', '02년생', '7조'];
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollNext = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setCurrentIndex((state) => (state + 1) % items.length);
    };

    const scrollPrev = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setCurrentIndex((state) => {
        const nextIndex = state - 1;
        return nextIndex < 0 ? items.length - 1 : nextIndex;
      });
    };

    return (
      <StyledItemContainer alignH="center">
        <StyledArrowButton onClick={scrollPrev} />
        <StyledFont size="L" color="secondary" bold>
          {items[currentIndex]}
        </StyledFont>
        <StyledArrowButton direction="down" onClick={scrollNext} />
      </StyledItemContainer>
    );
  };

  const Answer = () => {
    return (
      <StyledAboutContainer align="center" alignH="center">
        <StyledFadeUpFont size="L" delay={0.3} bold isVisible={isVisible}>
          저는
        </StyledFadeUpFont>
        <ScrollBanner />
        <StyledFadeUpFont size="L" delay={0.6} bold isVisible={isVisible}>
          입니다.
        </StyledFadeUpFont>
      </StyledAboutContainer>
    );
  };

  return (
    <StyledFullScreenSection background="white" ref={ref}>
      <StyledFont />
      <QnA
        question="자기소개 해주세요!"
        answer={<Answer />}
        isVisible={isVisible}
      />
    </StyledFullScreenSection>
  );
};

const StyledAboutContainer = styled(StyledContainerH)`
  flex: 1 0 auto;
`;

const StyledItemContainer = styled(StyledContainer)`
  width: 12rem;
`;

export default AboutMe;
