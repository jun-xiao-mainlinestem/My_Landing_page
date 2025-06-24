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
      <style>{`
        .navbar.bg-darker {
          background-color: #d1d5db !important;
        }
        .menu-btn {
          transition: background 0.2s, color 0.2s, border 0.2s;
        }
        .menu-btn:hover, .menu-btn:focus {
          background-color: darkgreen !important;
          color: #fff !important;
          border-color: darkgreen !important;
        }
        .menu-btn .hamburger {
          color: darkgreen;
          transition: color 0.2s;
        }
        .menu-btn:hover .hamburger, .menu-btn:focus .hamburger {
          color: #fff;
        }
      `}</style>
      <nav className="navbar navbar-light bg-darker">
        <button
          className="btn menu-btn"
          style={{ backgroundColor: '#e0e0e0', color: 'darkgreen', border: '2px solid darkgreen', marginLeft: '12px' }}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span className="hamburger" style={{ fontSize: '1.5rem', lineHeight: '1' }}>&#9776;</span>
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
          <li><Link to="/match-pairs" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}>Match Pairs</Link></li>
          <li><Link to="/cat-images" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}>Get Cat Images</Link></li>
          <li><Link to="/features" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}>About</Link></li>
          <li><a href="https://github.com/ericjiangxiao/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar; 