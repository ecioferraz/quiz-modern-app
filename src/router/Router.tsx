import { Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}
