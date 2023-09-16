import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Planetary from './pages/planetary/planetary';
import { useRef } from 'react';
import Tales from './pages/tales/tales';
import Game from './pages/game/game';
// import Contact from './pages/contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Planetary />} />
        <Route path="/tales" element={<Tales />} />
        <Route path="/play" element={<Game />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
