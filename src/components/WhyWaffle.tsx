import React from 'react';
import styled from 'styled-components';

import MyProfile from '../../public/images/coding_cat.jpeg';
import YourProfile from '../../public/images/kakako_basic_profile.jpeg';
import QnA from './common/QnA';
import {
  StyledContainer,
  StyledContainerH,
  StyledFullScreenSection,
} from './styles/Container.styled';
import { StyledFont } from './styles/Font.styled';

interface BubbleProps {
  text: string;
}

const WhyWaffle = () => {
  const YourBubble: React.FC<BubbleProps> = ({ text }) => {
    return (
      <StyledContainerH gap={2.4}>
        <StyledProfileImage src={YourProfile} />
        <StyledContainer>
          <StyledFont size="S">과거의 나</StyledFont>
          <StyledYourSpeechBubble>{text}</StyledYourSpeechBubble>
        </StyledContainer>
      </StyledContainerH>
    );
  };

  const MyBubble: React.FC<BubbleProps> = ({ text }) => {
    return (
      <StyledContainerH gap={2.4}>
        <StyledContainer alignH="right">
          <StyledFont size="S">와플 루키가 된 나</StyledFont>
          <StyledMySpeechBubble>{text}</StyledMySpeechBubble>
        </StyledContainer>
        <StyledProfileImage src={MyProfile} />
      </StyledContainerH>
    );
  };

  const Answer = () => {
    return (
      <StyledChatRoom gap={2.4}>
        <YourBubble text="어, 되네? 그럼 걍 되는대로 해야겠다~" />
        <MyBubble text="더 깔끔하게 짤 수 있는 코드를 생각해보자.." />
        <YourBubble text="타입이고 뭐고 일단 빨리 마감해야지.." />
        <MyBubble text="Typescript와 ESlint로 규칙을 지켜보자!" />
        <YourBubble text="인생은 혼자야. 그냥 개인 프로젝트 해야지~" />
        <MyBubble text="개발을 즐기는 친구들과 함께 팀 프로젝트를 경험해보자!" />
      </StyledChatRoom>
    );
  };

  return (
    <StyledFullScreenSection background="secondaryBright">
      <QnA
        question="와플스튜디오에서 배우고 싶은 것은 무엇인가요?"
        answer={<Answer />}
      />
    </StyledFullScreenSection>
  );
};

const StyledSpeechBubble = styled(StyledFont)`
  position: relative;
  border-radius: 1rem;
  padding: 1rem 2rem;
  max-width: 100%;
`;

const StyledYourSpeechBubble = styled(StyledSpeechBubble)`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 2px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: ${({ theme }) => theme.color.white};
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -10px;
  }
`;

const StyledMySpeechBubble = styled(StyledSpeechBubble)`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  text-align: left;

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    right: 2px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left-color: ${({ theme }) => theme.color.primary};
    border-right: 0;
    margin-right: -10px;
    margin-bottom: -10px;
  }
`;

const StyledProfileImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 1rem;
`;

const StyledChatRoom = styled(StyledContainer)`
  overflow-y: auto;
  max-height: 75vh;
  padding-right: 1rem;

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.primary};
    border-radius: 1rem;
    background-clip: padding-box;
    border: 5px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.color.primary} transparent;
`;

export default WhyWaffle;
