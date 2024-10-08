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
  isVisible: boolean;
}

const QnA: React.FC<QnAProps> = ({ question, answer, isVisible }) => {
  return (
    <StyledContainer gap={2.4}>
      <StyledFadeUpFont size="L" bold isVisible={isVisible}>
        {question}
      </StyledFadeUpFont>
      <StyledQuestionContainer align="center">{answer}</StyledQuestionContainer>
    </StyledContainer>
  );
};

const StyledQuestionContainer = styled(StyledFadeUpContainer)`
  flex: 1 0 auto;
`;

export default QnA;
