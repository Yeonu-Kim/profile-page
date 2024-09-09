import styled, { css } from 'styled-components';

import { fadeInUp } from './animation.tsx';

interface StyledFontProps {
  size?: 'XL' | 'L' | 'R' | 'S';
  bold?: boolean;
  color?: 'white' | 'black' | 'primary' | 'secondary' | 'inherit';
}

interface StyledFadeUpFontProps {
  isVisible: boolean;
  delay?: number;
}

export const StyledFont = styled.span<StyledFontProps>`
  font-size: ${({ theme, size = 'R' }) => `${theme.font[size]}rem`};
  font-weight: ${({ bold = false }) => (bold ? 'bold' : 'normal')};
  line-height: ${({ theme, size = 'R' }) => `${theme.font[size] * 1.5}rem`};
  color: ${({ theme, color = 'inherit' }) =>
    color !== 'inherit' ? theme.color[color] : color};
`;

export const StyledFadeUpFont = styled(StyledFont)<StyledFadeUpFontProps>`
  opacity: 0;
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${fadeInUp} 0.8s ease forwards
        `
      : 'none'};
  animation-delay: ${({ delay }) => `${delay ?? 0}s`};
`;
