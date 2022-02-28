import Home from './pages/home';
import ListWords from './pages/list_words';
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
        <Route path="/kiem-tra" element={<TestWord />} />
        <Route path="/thong-ke/tu-hoc-duoc" element={<Analytics />} />
        <Route path="/thong-ke/nho-quen" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
