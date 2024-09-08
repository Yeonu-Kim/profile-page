import type { MouseEvent } from 'react';
import styled from 'styled-components';
interface StyledArrowButtonProps {
  direction?: 'up' | 'down';
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

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
