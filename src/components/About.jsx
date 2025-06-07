// src/components/About.jsx
import React from 'react';
import profileImage from '../assets/working_women.jpeg'; // Replace with your actual image path

const About = () => {
  const containerStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#4B0082',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
  };

  const imageContainer = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const textStyle = {
    fontSize: '1.1rem',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  return (
    <section style={containerStyle} id="about">
      <div style={imageContainer}>
        <img src={profileImage} alt="Prathiksha" style={imageStyle} />
      </div>
      <h2 style={headingStyle}>About Me</h2>
      <p style={textStyle}>
        I’m a passionate developer with experience in building dynamic web applications using modern tech stacks.
        I enjoy translating creative ideas into functional, efficient, and user-friendly experiences with clean code
        and intuitive design.
      </p>
    </section>
  );
};

export default About;
