import { StyledContainer } from '../components/styles/Container.styled.tsx';
import { StyledFadeUpFont } from '../components/styles/Font.styled.tsx';

const Hero = () => {
  return (
    <StyledContainer gap={4} color="white" align="center">
      <StyledFadeUpFont size="L" delay={0}>
        만나서 반가워요!
      </StyledFadeUpFont>
      <StyledContainer color="white">
        <StyledFadeUpFont size="XL" delay={0.3} bold>
          프론트엔드 세미나
        </StyledFadeUpFont>
        <StyledFadeUpFont size="XL" delay={0.6} bold>
          김연우입니다.
        </StyledFadeUpFont>
      </StyledContainer>
    </StyledContainer>
  );
};

export default Hero;
