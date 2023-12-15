import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import SafePlusHome from './pages/SafePlusHome';
import Home from './pages/Home';
import SafePlusSetting from './pages/SafePlusSetting';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SafePlusHome />} />
        {/* <Route path="/safeplus-home" element={<SafePlusHome />} /> */}
        <Route path="/setting" element={<Settings />} />
        <Route path="/safeplus-setting" element={<SafePlusSetting />} />
      </Routes>
    </BrowserRouter>
  );
}
