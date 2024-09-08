import { useState } from 'react';
import styled from 'styled-components';

import QnA from './common/QnA';
import { StyledButton } from './styles/Button.styled.tsx';
import {
  StyledContainer,
  StyledContainerH,
} from './styles/Container.styled.tsx';
import { StyledFont } from './styles/Font.styled';

interface StyledSelectCardProps {
  isSelected: boolean;
}

const MBTI = () => {
  const [mbti, setMBTI] = useState<Array<number | null>>([
    null,
    null,
    null,
    null,
  ]);
  const [result, setResult] = useState<boolean | null>(null);
  const [seeResult, setSeeResult] = useState<boolean>(false);

  const onClickMBTI = (index: number, select: number) => {
    setMBTI((prevState) => {
      const newState = [...prevState];
      newState[index] = select;
      return newState;
    });
  };

  const checkAnswer = () => {
    setSeeResult(false);
    setResult(mbti.every((value, index) => value === [1, 1, 0, 0][index]));
  };

  const seeAnswer = () => {
    setResult(null);
    setMBTI([1, 1, 0, 0]);
    setSeeResult(true);
  };

  const Answer = () => {
    return (
      <>
        <StyledFont>맞춰보세요!</StyledFont>
        <StyledMBTIContainer align="center" gap={3.2}>
          <StyledContainer alignH="center">
            {result === null ? null : result ? (
              <StyledFont size="L" bold>
                정답이에요! 저는 INTJ입니다.
              </StyledFont>
            ) : (
              <StyledFont>땡! 다시 시도해보세요~</StyledFont>
            )}
            {seeResult ? (
              <StyledFont size="L" bold>
                저는 INTJ입니다.
              </StyledFont>
            ) : null}
          </StyledContainer>
          <StyledContainerH alignH="center">
            {['EI', 'SN', 'TF', 'JP'].map((pair, index) => (
              <StyledMBTICardContainer key={index}>
                {pair.split('').map((char, select) => (
                  <StyledSelectCard
                    key={char}
                    onClick={() => {
                      onClickMBTI(index, select);
                    }}
                    isSelected={mbti[index] === select}
                  >
                    {char}
                  </StyledSelectCard>
                ))}
              </StyledMBTICardContainer>
            ))}
          </StyledContainerH>

          <StyledContainerH alignH="center" gap={3.2}>
            <StyledButton
              background="secondaryBright"
              color="black"
              onClick={seeAnswer}
            >
              정답확인
            </StyledButton>
            <StyledButton onClick={checkAnswer}>제출하기</StyledButton>
          </StyledContainerH>
        </StyledMBTIContainer>
      </>
    );
  };

  return <QnA question="MBTI가 어떻게 되나요?" answer={<Answer />} />;
};

const StyledMBTIContainer = styled(StyledContainer)`
  flex: 1 0 auto;
`;

const StyledMBTICardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const StyledSelectCard = styled.button<StyledSelectCardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  font-weight: bold;
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  border: ${({ theme }) => theme.color.secondary} 1px solid;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.color.secondary : theme.color.white};
`;

export default MBTI;
