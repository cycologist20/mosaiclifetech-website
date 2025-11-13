import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HealthStoriesPage from './pages/HealthStoriesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health-stories" element={<HealthStoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
