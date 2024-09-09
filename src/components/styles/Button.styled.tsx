import type { MouseEvent } from 'react';
import styled from 'styled-components';
interface StyledArrowButtonProps {
  direction?: 'up' | 'down';
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface StyledButtonProps {
  color?: 'primary' | 'secondary' | 'white' | 'black';
  background?: 'primary' | 'secondary' | 'white' | 'black' | 'secondaryBright';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: ${({ theme, color = 'white' }) => theme.color[color]};
  background-color: ${({ theme, background = 'primary' }) =>
    theme.color[background]};
  border: none;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`;

export const StyledArrowButton = styled.button<StyledArrowButtonProps>`
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background: transparent;
  border: none;

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 1.8rem solid transparent; // Half the width of the button
    border-right: 1.8rem solid transparent; // Half the width of the button
    position: absolute;
    border-bottom: ${({ direction = 'up' }) =>
      direction === 'up' ? '1.8rem solid black' : 'none'};
    border-top: ${({ direction = 'up' }) =>
      direction === 'down' ? '1.8rem solid black' : 'none'};
  }
`;
