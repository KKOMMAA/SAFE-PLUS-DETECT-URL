import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import SafePlusHome from './pages/SafePlusHome';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SafePlusHome />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
