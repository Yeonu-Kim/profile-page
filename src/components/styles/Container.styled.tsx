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
}

export const StyledFullScreenSection = styled.div<StyledSectionProps>`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  padding: 5rem;
  background-color: ${({ theme, background }) =>
    theme.color[background ?? 'default']};
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
  background-color: ${({ theme, background }) =>
    theme.color[background ?? 'default']};
  color: ${({ theme, color }) => theme.color[color ?? 'black']};
  width: ${({ width }) => `${width ?? 100}%`};
  gap: ${({ gap }) => `${gap ?? 1}rem`};
`;

export const StyledContainer = styled(createFlexContainer())`
  justify-content: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'right'
        ? 'flex-end'
        : 'flex-start'};
  text-align: ${({ alignH = 'left' }) => alignH};
  align-item: ${({ alignH }) =>
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
  align-item: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'right'
        ? 'flex-end'
        : 'flex-start'};
`;

export const StyledFullContainerH = createFlexContainer('row');

export const StyledFadeUpContainer = styled(StyledContainer)`
  animation: ${fadeInUp} 0.8s ease forwards;
`;

// export const StyledFadeUpContainerH = styled(StyledContainerH)`
//   animation: ${fadeInUp} 0.8s ease forwards;
// `;
