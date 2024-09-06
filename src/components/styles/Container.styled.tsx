import React from 'react';
import styled from 'styled-components';

interface StyledSectionProps {
  children: React.ReactNode;
  backgroundColor: string;
}

interface StyledContainerProps {
  background?: 'white' | 'black' | 'primary' | 'secondary';
  color?: 'white' | 'black' | 'primary' | 'secondary';
  width?: number;
  align?: 'left' | 'center' | 'right';
  gap?: number;
}

export const StyledFullScreenSection = styled.div<StyledSectionProps>`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  background-color: ${({ backgroundColor }) => backgroundColor};
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
  text-align: ${({ align }) => align};
`;

export const StyledFullContainer = styled(createFlexContainer())`
  justify-content: space-between;
`;

export const StyledContainerH = styled(createFlexContainer('row'))`
  justify-content: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'right'
        ? 'flex-end'
        : 'flex-start'};
  text-align: ${({ align }) => align};
`;

export const StyledFullContainerH = createFlexContainer('row');
