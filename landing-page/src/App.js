import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Hero from './Hero';
import SnakeGame from './SnakeGame';
import MatchPairs from './MatchPairs';
import CatImages from './CatImages';
import Features from './Features';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/snake" element={<SnakeGame />} />
            <Route path="/match-pairs" element={<MatchPairs />} />
            <Route path="/cat-images" element={<CatImages />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </div>
        <footer className="bg-light text-center py-3 mt-auto" style={{ borderTop: '1px solid #eee' }}>
          &copy; {new Date().getFullYear()} Eric Xiao. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
