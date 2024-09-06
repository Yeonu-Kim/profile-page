import { ThemeProvider } from 'styled-components';

import MainPage from './components/MainPage.tsx';
import GlobalStyles from './components/styles/GlobalStyle.styled.tsx';
import theme from './components/styles/theme.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
