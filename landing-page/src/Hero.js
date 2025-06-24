import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container text-center" style={{ marginTop: '100px' }}>
      <h1 className="display-4" style={{ fontFamily: 'Times New Roman, Times, serif', color: 'deeppink' }}>Welcome to My Landing Page</h1>
      <p className="lead">This is a fun little project that is totally 100% made by me, and not by ai.</p>
      <Link className="btn btn-primary btn-lg" to="/features" role="button">Get Started</Link>
    </div>
  );
}

export default Hero; 