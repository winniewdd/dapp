import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { Manage } from './pages/manage';
import { Control} from './pages/control';
import NotFound from './pages/404';
import { Layout } from './components/layout';
import { Setting } from './pages/setting';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Control />} />
        <Route path="/control" element={<Control />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/404" Component={NotFound} />
      </Routes>
    </Router>
  );
}
