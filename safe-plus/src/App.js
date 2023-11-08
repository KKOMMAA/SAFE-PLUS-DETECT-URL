import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle>
        <div className="App">
          <header className="App-header">
            <StHomeWrapper>Hi</StHomeWrapper>
          </header>
        </div>
      </GlobalStyle>
    </>
  );
}

const StHomeWrapper = styled.div`
  font-size: 100px;
`;

export default App;
