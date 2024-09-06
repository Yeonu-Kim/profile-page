import styled from 'styled-components';

interface StyledFontProps {
  size?: number; // default size is now defined in the styled component
  bold?: boolean;
}

export const StyledFont = styled.span<StyledFontProps>`
  font-size: ${({ size = 1.8 }) => `${size}rem`};
  font-weight: ${({ bold = false }) => (bold ? 'bold' : 'normal')};
  line-height: ${({ size = 1.8 }) => `${size * 1.5}rem`};
`;
