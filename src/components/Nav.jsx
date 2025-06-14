import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    backgroundColor: '#fff',
    backdropFilter: 'blur(10px)',
    fontFamily: "'Poppins', sans-serif",
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
  };

  const logoStyle = {
    color: '#4B0082',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  };

  const linksStyle = {
    display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '1.5rem',
    position: isMobile ? 'absolute' : 'static',
    top: '60px',
    right: '2rem',
    backgroundColor: '#fff',
    padding: isMobile ? '1rem' : '0',
    border: isMobile ? '1px solid #ccc' : 'none',
    borderRadius: '8px',
    boxShadow: isMobile ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
  };

  const linkBaseStyle = {
    color: '#333',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  };

  const hamburgerStyle = {
    display: isMobile ? 'block' : 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#4B0082',
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#4B0082';
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#333';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>MyPortfolio</div>
      <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div style={linksStyle}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            style={linkBaseStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
