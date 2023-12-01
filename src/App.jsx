import Router from './components/common/Router';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';

import Settings from './pages/Settings';
import TransferAccount from './pages/TransferHome';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;
