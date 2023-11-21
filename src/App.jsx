import Router from './components/common/Router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <RecoilRoot>
        <Router />
        <GlobalStyle />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
