import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='' element />
      <Route path='/detail/:category' element />
      <Route path='/quiz' element />
    </Routes>
  );
}
