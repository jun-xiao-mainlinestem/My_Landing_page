import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Hero from './Hero';
import SnakeGame from './SnakeGame';
import MatchPairs from './MatchPairs';
import CatImages from './CatImages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/match-pairs" element={<MatchPairs />} />
        <Route path="/cat-images" element={<CatImages />} />
      </Routes>
    </Router>
  );
}

export default App;
