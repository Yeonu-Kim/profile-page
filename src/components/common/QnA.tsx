import React, { useRef } from 'react';
import styled from 'styled-components';

import useIsVisible from '../../hooks/useIsVisible';
import {
  StyledContainer,
  StyledFadeUpContainer,
} from '../styles/Container.styled';
import { StyledFadeUpFont } from '../styles/Font.styled';

interface QnAProps {
  question: string;
  answer: React.ReactNode;
}

const QnA: React.FC<QnAProps> = ({ question, answer }) => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIsVisible(ref);
  return (
    <StyledContainer gap={2.4} ref={ref}>
      <StyledFadeUpFont size="L" bold isVisible={isVisible}>
        {question}
      </StyledFadeUpFont>
      <StyledQuestionContainer>{answer}</StyledQuestionContainer>
    </StyledContainer>
  );
};

const StyledQuestionContainer = styled(StyledFadeUpContainer)`
  flex: 1 0 auto;
`;

export default QnA;
