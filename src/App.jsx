import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Timeline from './pages/Timeline';
import User from './pages/User';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="feed" element={<Timeline />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
