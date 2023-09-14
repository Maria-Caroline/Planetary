import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Planetary from './pages/planetary/planetary';
import { useRef } from 'react';
// import AboutMe from './pages/about-me/AboutMe';
// import Projects from './pages/projects/Projects';
// import Contact from './pages/contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Planetary/>} />
      {/* <Route path="/about" element={<AboutMe/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/Contact" element={<Contact/>} />  */}

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
