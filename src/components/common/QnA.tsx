import React from 'react';

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
      <StyledFadeUpContainer>{answer}</StyledFadeUpContainer>
    </StyledContainer>
  );
};

export default QnA;
