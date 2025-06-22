import { Route, Routes } from 'react-router';
import { LandingPage } from './pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
