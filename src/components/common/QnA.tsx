import React from 'react';

import { StyledContainer } from '../styles/Container.styled';
import { StyledFont } from '../styles/Font.styled';

interface QnAProps {
  question: string;
  answer: React.ReactNode;
}

const QnA: React.FC<QnAProps> = ({ question, answer }) => {
  return (
    <StyledContainer gap={2.4}>
      <StyledFont>Q. {question}</StyledFont>
      <StyledContainer>{answer}</StyledContainer>
    </StyledContainer>
  );
};

export default QnA;
