import React from 'react';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#fff', // translucent white
    backdropFilter: 'blur(10px)',
    fontFamily: "'Poppins', sans-serif", // Updated font
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
    color: '#4B0082', // strong violet
    fontSize: '1.8rem',
    fontWeight: 'bold',
  };

  const linksStyle = {
    display: 'flex',
    gap: '1.5rem',
  };

  const linkBaseStyle = {
    color: '#333',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
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
