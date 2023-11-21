import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import QuizStart from '../../pages/QuizStart';
import QuizIng from '../../pages/QuizIng';
import QuizEnd from '../../pages/QuizEnd';
import HomeSearchResult from '../../pages/HomeSearchResult';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:searchId" element={<HomeSearchResult />} />
        <Route path="/quizstart" element={<QuizStart />} />
        <Route path="/quizIng" element={<QuizIng />} />
        <Route path="/quizEnd" element={<QuizEnd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
