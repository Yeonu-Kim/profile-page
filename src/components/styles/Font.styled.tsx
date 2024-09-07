import styled from 'styled-components';

import { fadeInUp } from './animation.tsx';

interface StyledFontProps {
  size?: 'XL' | 'L' | 'R' | 'S';
  bold?: boolean;
  color?: string;
}

interface StyledFadeUpFontProps {
  delay?: number;
}

export const StyledFont = styled.span<StyledFontProps>`
  font-size: ${({ theme, size = 'R' }) => `${theme.font[size]}rem`};
  font-weight: ${({ bold = false }) => (bold ? 'bold' : 'normal')};
  line-height: ${({ theme, size = 'R' }) => `${theme.font[size] * 1.5}rem`};
`;

export const StyledFadeUpFont = styled(StyledFont)<StyledFadeUpFontProps>`
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: ${({ delay }) => `${delay ?? 0}s`};
`;
