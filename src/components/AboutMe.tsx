import styled from 'styled-components';

import QnA from './common/QnA';
import { StyledContainerH } from './styles/Container.styled';
import { StyledFont } from './styles/Font.styled.tsx';

const AboutMe = () => {
  const Answer = () => {
    return (
      <StyledAboutContainer align="center">
        <StyledFont size="L" bold>
          저는
        </StyledFont>
        <StyledFont size="L" bold>
          _____
        </StyledFont>
        <StyledFont size="L" bold>
          입니다.
        </StyledFont>
      </StyledAboutContainer>
    );
  };

  return <QnA question="당신은 누구인가요?" answer={<Answer />} />;
};

const StyledAboutContainer = styled(StyledContainerH)`
  flex: 1 0 auto;
`;

export default AboutMe;
