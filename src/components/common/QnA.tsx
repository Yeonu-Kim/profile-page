import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';

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
  return (
    <StyledContainer gap={2.4}>
      <StyledFadeUpFont size="L" bold>
        Q. {question}
      </StyledFadeUpFont>
      <StyledQuestionContainer>{answer}</StyledQuestionContainer>
    </StyledContainer>
  );
};

const StyledQuestionContainer = styled(StyledFadeUpContainer)`
  flex: 1 0 auto;
`;

export default QnA;
