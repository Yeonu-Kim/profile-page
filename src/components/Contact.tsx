import { useRef } from 'react';
import styled from 'styled-components';

import EmailLogo from '../../public/images/email.png';
import GithubLogo from '../../public/images/github.png';
import useIsVisible from '../hooks/useIsVisible.tsx';
import { StyledButton } from './styles/Button.styled';
import {
  StyledContainer,
  StyledContainerH,
  StyledFullContainer,
  StyledFullScreenSection,
} from './styles/Container.styled';
import { StyledFont } from './styles/Font.styled';

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIsVisible(ref);

  if (isVisible) {
    console.error('Contact');
  }
  const moveLink = (url: string) => {
    window.open(url);
  };

  const copyMail = async () => {
    try {
      await navigator.clipboard.writeText('ywk0524@snu.ac.kr');
      alert('이메일이 복사되었습니다!');
    } catch (error) {
      throw new Error('이메일 복사 실패');
    }
  };

  return (
    <StyledFullScreenSection background="secondary">
      <StyledFullContainer>
        <StyledContainer ref={ref}>
          <StyledFont size="XL" bold>
            반갑습니다!
          </StyledFont>
          <StyledFont size="L" bold>
            한 학기 동안 함께 열심히 해봐요😊
          </StyledFont>
        </StyledContainer>
        <StyledContainer>
          <StyledFont bold>Contact</StyledFont>
          <StyledContainerH>
            <StyledButton
              background="black"
              onClick={() => {
                moveLink('https://github.com/Yeonu-Kim');
              }}
            >
              <ContactLogo src={GithubLogo} />
              깃허브
            </StyledButton>
            <StyledButton
              background="secondaryBright"
              color="black"
              onClick={() => {
                copyMail().catch(() => {
                  alert('이메일 복사에 실패했습니다.');
                });
              }}
            >
              <ContactLogo src={EmailLogo} />
              이메일
            </StyledButton>
          </StyledContainerH>
        </StyledContainer>
      </StyledFullContainer>
    </StyledFullScreenSection>
  );
};

const ContactLogo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 1rem;
`;

export default Contact;
