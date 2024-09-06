import 'styled-components';

import type { ThemeProps } from './theme.tsx';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}
