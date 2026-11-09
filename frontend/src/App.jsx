import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Upload from './pages/Upload.jsx';
import Quiz from './pages/Quiz.jsx';
import Results from './pages/Results.jsx';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">AI Quiz Generator</Link>
        <Link to="/login">Login</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/results">Results</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </main>
    </>
  );
}
