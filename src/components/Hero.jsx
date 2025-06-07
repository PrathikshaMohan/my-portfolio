import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

const Hero = () => {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '77vh',
    backgroundImage: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
    color: '#1b1b1b',
    padding: '2rem',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
  };

  const headingStyle = {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#4B0082',
  };

  const subheadingStyle = {
    fontSize: '1.3rem',
    maxWidth: '700px',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
    color: '#333',
  };

  const buttonStyle = {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#4B0082',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(75, 0, 130, 0.3)',
    transition: 'all 0.3s ease-in-out',
    textDecoration: 'none',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#6A0DAD';
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 6px 20px rgba(106, 13, 173, 0.4)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#4B0082';
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 15px rgba(75, 0, 130, 0.3)';
  };

  return (
    <section style={sectionStyle} id="home">
      <h1 style={headingStyle}>Hello, I'm Prathiksha</h1>
      <p style={subheadingStyle}>
        Empowering innovation with web development and software solutions, striving for excellence in every project.
      </p>

      <PDFDownloadLink
        document={<ResumePDF />}
        fileName="Prathiksha_Resume.pdf"
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {({ loading }) => (loading ? 'Generating...' : 'Download Resume')}
      </PDFDownloadLink>
    </section>
  );
};

export default Hero;
