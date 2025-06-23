import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '250px',
    backgroundColor: '#222',
    color: 'white',
    paddingTop: '60px',
    transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    zIndex: 1000,
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 999,
    display: sidebarOpen ? 'block' : 'none',
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <button
          className="btn"
          style={{ backgroundColor: '#e0e0e0', color: 'darkgreen', border: '2px solid darkgreen', marginLeft: '12px' }}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span style={{ color: 'darkgreen', fontSize: '1.5rem', lineHeight: '1' }}>&#9776;</span>
        </button>
      </nav>
      <div style={overlayStyle} onClick={() => setSidebarOpen(false)} />
      <div style={sidebarStyle}>
        <button
          className="btn btn-sm btn-light mb-4"
          style={{ position: 'absolute', top: 10, right: 10 }}
          onClick={() => setSidebarOpen(false)}
        >
          &times;
        </button>
        <ul className="list-unstyled ps-3">
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/snake" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}>Snake Game</Link></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar; 