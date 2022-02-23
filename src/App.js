import Home from './pages/home';
import ListWords from './pages/list_words';
import SearchWord from './pages/seach_word';
import TestWord from './pages/test-word';
import Analytics from './pages/analytics';
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
        <Route path="/tra-cuu" element={<SearchWord />} />
        <Route path="/kiem-tra" element={<TestWord />} />
        <Route path="/thong-ke" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
