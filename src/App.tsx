import { ThemeProvider } from 'styled-components';

import GlobalStyles from './components/styles/GlobalStyle.styled.tsx';
import theme from './components/styles/theme.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>Hello World!</div>
    </ThemeProvider>
  );
}

export default App;
