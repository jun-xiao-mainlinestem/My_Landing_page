import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container text-center" style={{ marginTop: '100px' }}>
      <h1 className="display-4" style={{ fontFamily: 'Times New Roman, Times, serif', color: 'deeppink' }}>Welcome to My Landing Page</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <Link className="btn btn-primary btn-lg" to="/snake" role="button">Get Started</Link>
    </div>
  );
}

export default Hero; 