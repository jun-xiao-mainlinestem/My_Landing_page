import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Hero from './Hero';
import SnakeGame from './SnakeGame';
import MatchPairs from './MatchPairs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/match-pairs" element={<MatchPairs />} />
      </Routes>
    </Router>
  );
}

export default App;
