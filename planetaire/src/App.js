import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Planetary from './pages/planetary/planetary';
import React, { useState, useEffect } from 'react';
import Tales from './pages/tales/tales';
import Game from './pages/game/game';
// import Contact from './pages/contact/Contact';
import './App.css';
import LoadingScreen from './components/loading-screen/loading-screen';
import SplashPage from './pages/splash-page/splash-page';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/planetary" element={<Planetary />} />
            <Route path="/play" element={<Game />} />
            <Route path="/tales" element={<Tales />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
