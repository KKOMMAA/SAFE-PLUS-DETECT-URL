import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TransferHome from '../../pages/TransferHome';
import TransferAccountInfo from '../../pages/TransferAccountInfo';
import TransferHowMuch from '../../pages/TransferHowMuch';
import TransferThisMuch from '../../pages/TransferToWhom';
import TransferFinished from '../../pages/TransferFinished';
import Home from '../../pages/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transfer" element={<TransferHome />} />
        <Route path="/type-accountInfo" element={<TransferAccountInfo />} />
        <Route path="/how-much" element={<TransferHowMuch />} />
        <Route path="/finished" element={<TransferFinished />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
