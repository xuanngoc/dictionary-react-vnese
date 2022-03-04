import Home from './pages/home';
import ListWords from './pages/list_words';
import TestWord from './pages/test-word';
import AnalyticsWordLearnt from './pages/analytics_word_learnt';
import AnalyticsWordRememberMiss from './pages/analytics_word_remember_miss';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/danh-sach-tu" element={<ListWords />} />
        <Route path="/kiem-tra" element={<TestWord />} />
        <Route path="/thong-ke/tu-hoc-duoc" element={<AnalyticsWordLearnt />} />
        <Route path="/thong-ke/nho-quen" element={<AnalyticsWordRememberMiss />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
