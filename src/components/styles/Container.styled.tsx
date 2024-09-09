import type { RefObject } from 'react';
import React from 'react';
import styled from 'styled-components';

import { fadeInUp } from './animation';

interface StyledSectionProps {
  children: React.ReactNode;
  background?:
    | 'white'
    | 'black'
    | 'primary'
    | 'secondary'
    | 'secondaryBright'
    | 'default';
}

interface StyledContainerProps {
  background?:
    | 'white'
    | 'black'
    | 'primary'
    | 'secondary'
    | 'secondaryBright'
    | 'default';
  color?: 'white' | 'black' | 'primary' | 'secondary';
  width?: number;
  align?: 'left' | 'center' | 'right';
  alignH?: 'left' | 'center' | 'right';
  gap?: number;
  ref?: RefObject<HTMLElement>;
}

export const StyledFullScreenSection = styled.div<StyledSectionProps>`
  height: 100vh;
  width: 100%;
  min-width: 360px;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  padding: 2.4rem;
  background-color: ${({ theme, background = 'default' }) =>
    theme.color[background]};

  @media (min-width: 768px) {
    padding: 5rem;
  }
`;

export const StyledSectionContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const createFlexContainer = (
  direction: 'column' | 'row' = 'column',
) => styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: ${direction};
  background-color: ${({ theme, background = 'default' }) =>
    theme.color[background]};
  color: ${({ theme, color = 'black' }) => theme.color[color]};
  width: ${({ width = 100 }) => `${width}%`};
  gap: ${({ gap = 1 }) => `${gap}rem`};
`;

export const StyledContainer = styled(createFlexContainer())`
  justify-content: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'right'
        ? 'flex-end'
        : 'flex-start'};
  text-align: ${({ alignH = 'left' }) => alignH};
  align-items: ${({ alignH }) =>
    alignH === 'center'
      ? 'center'
      : alignH === 'right'
        ? 'flex-end'
        : 'flex-start'};
`;

export const StyledFullContainer = styled(createFlexContainer())`
  justify-content: space-between;
`;

export const StyledContainerH = styled(createFlexContainer('row'))`
  justify-content: ${({ alignH }) =>
    alignH === 'center'
      ? 'center'
      : alignH === 'right'
        ? 'flex-end'
        : 'flex-start'};
  text-align: ${({ alignH }) => alignH};
  align-items: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'right'
        ? 'flex-end'
        : 'flex-start'};
`;

// export const StyledFullContainerH = createFlexContainer('row');

export const StyledFadeUpContainer = styled(StyledContainer)`
  animation: ${fadeInUp} 0.8s ease forwards;
`;

// export const StyledFadeUpContainerH = styled(StyledContainerH)`
//   animation: ${fadeInUp} 0.8s ease forwards;
// `;
